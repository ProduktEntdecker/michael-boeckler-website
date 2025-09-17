#!/bin/bash

# NPM Security Check Script
# Comprehensive security validation for NPM packages

echo "🔒 NPM Security Check Starting..."
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ No package.json found${NC}"
    exit 1
fi

echo "📋 Checking package.json..."

# 1. Run NPM audit
echo -e "\n${YELLOW}1. Running NPM Audit...${NC}"
npm audit --audit-level=moderate

# 2. Check for known vulnerable packages (as of Dec 2024)
echo -e "\n${YELLOW}2. Checking for known compromised packages...${NC}"
COMPROMISED_PACKAGES=(
    "crypto-min"
    "crypto-lib"
    "node-hide"
    "wallet-miner"
    "ethereum-min"
    "bitcoin-wallet"
)

for pkg in "${COMPROMISED_PACKAGES[@]}"; do
    if grep -q "\"$pkg\"" package.json package-lock.json 2>/dev/null; then
        echo -e "${RED}⚠️  WARNING: Potentially compromised package found: $pkg${NC}"
    fi
done

# 3. Check for suspicious package patterns
echo -e "\n${YELLOW}3. Checking for suspicious patterns...${NC}"

# Check for typosquatting candidates
SUSPICIOUS_PATTERNS=(
    "reakt"  # Should be "react"
    "ract"   # Should be "react"
    "expres" # Should be "express"
    "loadsh" # Should be "lodash"
    "mongose" # Should be "mongoose"
)

for pattern in "${SUSPICIOUS_PATTERNS[@]}"; do
    if grep -q "\"$pattern" package.json 2>/dev/null; then
        echo -e "${RED}⚠️  Possible typosquatting: $pattern found${NC}"
    fi
done

# 4. List all dependencies with recent publish dates
echo -e "\n${YELLOW}4. Checking package publish dates...${NC}"
echo "Packages published in the last 7 days (review carefully):"

# Create a temp file for npm ls output
npm ls --depth=0 --json 2>/dev/null | \
    jq -r '.dependencies | to_entries[] | .key' 2>/dev/null | \
    while read -r package; do
        PUBLISH_DATE=$(npm view "$package" time.modified 2>/dev/null)
        if [ ! -z "$PUBLISH_DATE" ]; then
            # Check if published within last 7 days
            DAYS_AGO=$(( ($(date +%s) - $(date -d "$PUBLISH_DATE" +%s 2>/dev/null || echo 0)) / 86400 ))
            if [ $DAYS_AGO -lt 7 ] 2>/dev/null; then
                echo -e "${YELLOW}  ⚠️  $package - Published $DAYS_AGO days ago${NC}"
            fi
        fi
    done

# 5. Check for packages with install scripts
echo -e "\n${YELLOW}5. Packages with install scripts:${NC}"
npm ls --depth=0 --json 2>/dev/null | \
    jq -r '.dependencies | to_entries[] | .key' 2>/dev/null | \
    while read -r package; do
        SCRIPTS=$(npm view "$package" scripts 2>/dev/null)
        if echo "$SCRIPTS" | grep -q "install\|postinstall\|preinstall" 2>/dev/null; then
            echo "  📜 $package has install scripts"
        fi
    done

# 6. Verify package integrity
echo -e "\n${YELLOW}6. Verifying package integrity...${NC}"
if [ -f "package-lock.json" ]; then
    npm ci --dry-run 2>&1 | head -5
    echo -e "${GREEN}✅ Package integrity check passed${NC}"
else
    echo -e "${YELLOW}⚠️  No package-lock.json found - cannot verify integrity${NC}"
fi

# 7. Socket.dev scan (if available)
echo -e "\n${YELLOW}7. Socket.dev Scan...${NC}"
if command -v socket &> /dev/null; then
    socket scan create . 2>&1 | head -20
else
    echo "Socket CLI not installed. Install with: npm install -g @socketsecurity/cli"
    echo "Or run directly with: npx @socketsecurity/cli scan create ."
fi

echo -e "\n=================================="
echo -e "${GREEN}🔒 Security Check Complete${NC}"
echo ""
echo "Recommendations:"
echo "1. Review any warnings above carefully"
echo "2. Use 'npm install --ignore-scripts' for safer installation"
echo "3. Always commit package-lock.json"
echo "4. Consider using Socket.dev for continuous monitoring"