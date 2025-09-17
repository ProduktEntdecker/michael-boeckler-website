# Security Policy

## NPM Package Security

Due to recent supply chain attacks on NPM, we follow strict security practices:

### Before Installing Any Package

1. **Verify Package Authenticity**:
   ```bash
   npm view [package-name]
   npm view [package-name] downloads  # Should be high for legitimate packages
   npm view [package-name] repository # Check GitHub repo
   ```

2. **Use Socket.dev Scanner**:
   ```bash
   npx @socketsecurity/cli scan
   ```

3. **Install with Security Flags**:
   ```bash
   npm install --ignore-scripts
   npm audit
   ```

### Current Security Measures

- `.npmrc` configured with `ignore-scripts=true`
- All packages use exact versions (no ranges)
- Regular security audits via `npm audit`
- No automatic script execution on install

### Checking for Compromised Packages

Monitor these known indicators:
- Unusual network requests during install
- Packages with very recent publish dates
- Low download counts for supposedly popular packages
- Missing or suspicious repository URLs
- Obfuscated code in package sources

### If You Suspect a Compromise

1. **DO NOT** run `npm install` or `npm update`
2. Check package on https://socket.dev
3. Report to security@npmjs.com
4. Use `npm ls` to check currently installed packages
5. Review `package-lock.json` for unexpected changes

### Safe Installation Process

```bash
# 1. First, dry run to see what will happen
npm install --dry-run

# 2. Check for known vulnerabilities
npm audit

# 3. Install without running scripts
npm install --ignore-scripts

# 4. Manually review and run necessary scripts
npm rebuild [specific-package]
```

### Additional Tools

- **Socket.dev CLI**: `npx @socketsecurity/cli scan`
- **Snyk**: `npx snyk test`
- **NPM Audit**: `npm audit fix --dry-run`

## Reporting Security Issues

If you discover a security vulnerability, please email [your-email] with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)