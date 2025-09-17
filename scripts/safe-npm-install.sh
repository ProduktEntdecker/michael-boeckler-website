#!/bin/bash

# Safe NPM Install Script
# Installs packages with maximum security precautions
# Use this instead of 'npm install' for production projects

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "🔒 Safe NPM Install"
echo "==================="
echo ""

# Function to print colored messages
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }

# Check if running in CI environment
if [ "${CI:-false}" = "true" ]; then
    print_info "Running in CI environment"
    CI_MODE=true
else
    CI_MODE=false
fi

# 1. Pre-installation checks
print_info "Running pre-installation security checks..."

# Check if package.json exists
if [ ! -f "package.json" ]; then
    print_error "No package.json found in current directory"
    exit 1
fi

# Check if .npmrc exists with security settings
if [ ! -f ".npmrc" ]; then
    print_warning "No .npmrc found. Creating secure configuration..."
    cat > .npmrc << 'EOF'
# Security-focused npm configuration
ignore-scripts=true
save-exact=true
audit-level=moderate
package-lock=true
prefer-offline=true
EOF
    print_success "Created .npmrc with security settings"
fi

# 2. Backup existing node_modules and lockfile
if [ -d "node_modules" ]; then
    print_info "Backing up existing node_modules..."
    mv node_modules node_modules.backup.$(date +%Y%m%d_%H%M%S)
fi

if [ -f "package-lock.json" ]; then
    print_info "Backing up package-lock.json..."
    cp package-lock.json package-lock.json.backup.$(date +%Y%m%d_%H%M%S)
fi

# 3. Run security audit first
print_info "Running security audit..."
npm audit --audit-level=moderate 2>&1 | tee audit-before.log || true

# Count vulnerabilities
if [ -f "audit-before.log" ]; then
    CRITICAL=$(npm audit --json 2>/dev/null | jq '.metadata.vulnerabilities.critical // 0')
    HIGH=$(npm audit --json 2>/dev/null | jq '.metadata.vulnerabilities.high // 0')

    if [ "$CRITICAL" -gt 0 ]; then
        print_error "Critical vulnerabilities found: $CRITICAL"
        if [ "$CI_MODE" = true ]; then
            exit 1
        else
            read -p "Do you want to continue anyway? (y/N) " -n 1 -r
            echo
            if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                exit 1
            fi
        fi
    fi

    if [ "$HIGH" -gt 0 ]; then
        print_warning "High vulnerabilities found: $HIGH"
    fi
fi

# 4. Check for suspicious packages
print_info "Checking for suspicious packages..."

# Download latest compromised package list if available
COMPROMISED_LIST_URL="https://raw.githubusercontent.com/socketdev/npm-issues/main/compromised-packages.txt"
COMPROMISED_FILE="/tmp/compromised-packages.txt"

# Try to download the latest list (with timeout)
timeout 5 curl -s "$COMPROMISED_LIST_URL" -o "$COMPROMISED_FILE" 2>/dev/null || true

# Use local hardcoded list as fallback
KNOWN_COMPROMISED=(
    "crypto-min"
    "crypto-lib"
    "node-hide"
    "wallet-miner"
    "ethereum-min"
    "bitcoin-wallet"
    "eslint-scope@3.7.2"
    "event-stream@3.3.6"
)

# Add downloaded list if available
if [ -f "$COMPROMISED_FILE" ]; then
    while IFS= read -r line; do
        KNOWN_COMPROMISED+=("$line")
    done < "$COMPROMISED_FILE"
fi

# Check each dependency
FOUND_ISSUE=false
while IFS= read -r package; do
    # Remove quotes and version info
    pkg_name=$(echo "$package" | sed 's/"//g' | cut -d':' -f1 | xargs)

    for compromised in "${KNOWN_COMPROMISED[@]}"; do
        if [[ "$pkg_name" == "$compromised" ]]; then
            print_error "CRITICAL: Compromised package found: $pkg_name"
            FOUND_ISSUE=true
        fi
    done

    # Check for typosquatting
    case "$pkg_name" in
        reakt|ract|raect)
            print_warning "Possible typosquatting: $pkg_name (did you mean 'react'?)"
            FOUND_ISSUE=true
            ;;
        expres|exress)
            print_warning "Possible typosquatting: $pkg_name (did you mean 'express'?)"
            FOUND_ISSUE=true
            ;;
        loadsh|lodas)
            print_warning "Possible typosquatting: $pkg_name (did you mean 'lodash'?)"
            FOUND_ISSUE=true
            ;;
    esac
done < <(grep -o '"[^"]*":' package.json | grep -v "scripts\|repository\|keywords")

if [ "$FOUND_ISSUE" = true ]; then
    print_error "Security issues found! Please review and fix before continuing."
    exit 1
fi

# 5. Dry run first
print_info "Running dry-run to preview changes..."
npm install --dry-run --ignore-scripts 2>&1 | tee install-dry-run.log

# 6. Actual installation with safety flags
print_info "Installing packages with security flags..."

# Install without running scripts
npm ci --ignore-scripts 2>&1 | tee install.log || npm install --ignore-scripts 2>&1 | tee install.log

if [ $? -ne 0 ]; then
    print_error "Installation failed. Check install.log for details."
    exit 1
fi

print_success "Packages installed without running scripts"

# 7. Selective script execution
print_info "Checking for necessary build scripts..."

# List of packages that typically need build scripts
SAFE_BUILD_PACKAGES=(
    "esbuild"
    "sharp"
    "node-sass"
    "bcrypt"
    "sqlite3"
)

for package in "${SAFE_BUILD_PACKAGES[@]}"; do
    if npm ls "$package" &>/dev/null; then
        print_info "Rebuilding $package..."
        npm rebuild "$package" 2>&1 | tee -a rebuild.log
    fi
done

# 8. Post-installation audit
print_info "Running post-installation security audit..."
npm audit --audit-level=moderate 2>&1 | tee audit-after.log || true

# 9. Verify integrity
print_info "Verifying package integrity..."
npm ci --dry-run &>/dev/null
if [ $? -eq 0 ]; then
    print_success "Package integrity verified"
else
    print_warning "Package integrity check failed - lockfile may be out of sync"
fi

# 10. Clean up
rm -f install-dry-run.log install.log rebuild.log audit-before.log audit-after.log

# 11. Summary
echo ""
echo "==================="
print_success "Safe installation complete!"
echo ""
echo "Summary:"
echo "  • Packages installed with --ignore-scripts"
echo "  • Security audit performed"
echo "  • No compromised packages detected"
echo "  • Package integrity verified"
echo ""
echo "Next steps:"
echo "  1. Test your application thoroughly"
echo "  2. Run 'npm run build' if needed"
echo "  3. Commit package-lock.json to version control"
echo ""
print_info "For continuous monitoring, consider using Socket.dev"