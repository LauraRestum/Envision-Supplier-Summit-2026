#!/bin/bash

# Setup script for Envision Sales Assets repository
# Run this in your Documents or preferred project directory

echo "Setting up Envision Sales Assets repo..."

# Create main repo directory
mkdir -p envision-sales-assets
cd envision-sales-assets

# Initialize git
git init

# Create directory structure
mkdir -p landing-pages
mkdir -p presentations/packaging-ecosystem
mkdir -p presentations/aps-capabilities
mkdir -p one-pagers
mkdir -p email-templates
mkdir -p assets/images
mkdir -p assets/brand
mkdir -p .agents

# Create .gitignore
cat > .gitignore << 'EOF'
# macOS
.DS_Store

# Editor
.vscode/
.idea/

# Temp files
*.tmp
*.bak
*~

# Logs
*.log

# Don't ignore skills
!.agents/
EOF

# Create README
cat > README.md << 'EOF'
# Envision Sales Assets

Commercial sales and marketing assets for Envision Inc.

## Structure

- `landing-pages/` - Event landing pages, campaign pages
- `presentations/` - Segment-specific pitch decks and capabilities presentations
- `one-pagers/` - Product sheets, capability briefs
- `email-templates/` - Sales email templates
- `assets/` - Images, brand files, reusable components
- `.agents/` - Claude skills for brand governance and content generation

## Brand Standards

- **Typography:** Gotham (primary), Montserrat (web/digital)
- **Colors:** Navy #003087, Blue #003087, Green #78BE21
- **Tone:** Business-first, mission-second. Lead with capability.

## Usage with Claude Code

```bash
# Navigate to repo
cd envision-sales-assets

# Edit a specific file
claude-code landing-pages/supplier-summit-2026.html "update the agenda section"

# Apply brand standards
claude-code "audit all HTML files for brand compliance"
```

## Assets Inventory

### Landing Pages
- `supplier-summit-2026.html` - 2026 Supplier Summit event page

### Presentations
- TBD: APS capabilities deck
- TBD: Packaging ecosystem interactive presentation

EOF

# Clone ui-ux-pro-max-skill for page building
if [ ! -d "ui-ux-pro-max-skill" ]; then
  gh repo clone LauraRestum/ui-ux-pro-max-skill ui-ux-pro-max-skill
fi

echo ""
echo "✓ Repository structure created"
echo "✓ Git initialized"
echo "✓ ui-ux-pro-max-skill cloned"
echo ""
echo "Next steps:"
echo "1. Copy your HTML file into landing-pages/"
echo "2. Run: git add ."
echo "3. Run: git commit -m 'Initial commit: Supplier Summit landing page'"
echo "4. Start using Claude Code from this directory"
echo ""
echo "Your repo is ready at: $(pwd)"
