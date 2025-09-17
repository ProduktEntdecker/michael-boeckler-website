# Commit Conventions

## Overview
This project follows the Conventional Commits specification for clear and consistent commit messages.

## Branching Strategy

### Branch Types
- **main**: Production-ready code
- **develop**: Integration branch for features
- **feature/***: New features and enhancements
- **fix/***: Bug fixes
- **hotfix/***: Urgent production fixes
- **docs/***: Documentation updates
- **style/***: Code style and formatting changes
- **refactor/***: Code refactoring
- **test/***: Test additions or updates
- **chore/***: Maintenance tasks

### Branch Naming
```
feature/add-newsletter-popup
fix/instagram-grid-layout
docs/update-deployment-guide
chore/update-dependencies
```

## Commit Message Format

### Structure
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Test additions or corrections
- **build**: Build system changes
- **ci**: CI configuration changes
- **chore**: Maintenance tasks
- **revert**: Revert a previous commit

### Scope (Optional)
- **components**: React components
- **pages**: Page components
- **api**: API routes
- **styles**: CSS/styling
- **config**: Configuration files
- **deps**: Dependencies
- **analytics**: Analytics integration
- **instagram**: Instagram integration
- **newsletter**: Newsletter functionality

### Examples

#### Feature
```
feat(components): add BookCard hover animation

Implemented smooth scale transformation on hover for better user interaction.
Added transition duration of 300ms for professional feel.
```

#### Bug Fix
```
fix(instagram): handle API rate limiting

Added exponential backoff for Instagram API requests.
Implemented caching to reduce API calls.

Fixes #23
```

#### Documentation
```
docs(README): update deployment instructions

Added Vercel deployment section with step-by-step guide.
Included environment variable configuration.
```

#### Style
```
style(components): format JSX consistently

Applied Prettier formatting to all component files.
Fixed indentation and spacing issues.
```

#### Performance
```
perf(images): optimize book cover loading

Implemented lazy loading for book cover images.
Converted images to WebP format.
Reduced average image size by 60%.
```

#### Chore
```
chore(deps): update React to v18.2.0

Updated React and React-DOM to latest stable version.
Ran tests to ensure compatibility.
```

## Commit Rules

### DO's
- ✅ Use present tense ("add feature" not "added feature")
- ✅ Use imperative mood ("move cursor" not "moves cursor")
- ✅ Keep subject line under 50 characters
- ✅ Capitalize the subject line
- ✅ Don't end subject with a period
- ✅ Separate subject from body with blank line
- ✅ Use body to explain what and why, not how
- ✅ Reference issues and PRs in footer

### DON'Ts
- ❌ Don't commit directly to main
- ❌ Don't commit broken code
- ❌ Don't commit large files (>100MB)
- ❌ Don't commit sensitive information
- ❌ Don't mix multiple changes in one commit
- ❌ Don't use generic messages like "fix bug" or "update"

## Pull Request Process

### PR Title Format
Same as commit message format:
```
feat(newsletter): add double opt-in confirmation
```

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added tests
- [ ] All tests passing

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No console.log statements
- [ ] No commented-out code
```

## Git Workflow

### Feature Development
```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat(scope): description"

# Push to remote
git push origin feature/your-feature

# Create PR to develop
```

### Hotfix Process
```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-fix

# Make fix and commit
git add .
git commit -m "fix(scope): critical fix description"

# Push and create PR to main
git push origin hotfix/critical-fix

# After merge, also merge to develop
git checkout develop
git merge hotfix/critical-fix
```

### Release Process
```bash
# Create release branch from develop
git checkout develop
git checkout -b release/v1.0.0

# Version bump and final testing
npm version minor
git commit -m "chore(release): bump version to 1.0.0"

# Merge to main
git checkout main
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.0.0
```

## Commit Hooks (Optional)

### Husky + Commitlint Setup
```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": ["eslint --fix", "git add"]
  }
}
```

## Tools

### Recommended Tools
- **Commitizen**: Interactive commit message helper
- **Commitlint**: Lint commit messages
- **Husky**: Git hooks made easy
- **Standard Version**: Automated versioning

### VS Code Extensions
- GitLens
- Conventional Commits
- Git Graph

## References
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)