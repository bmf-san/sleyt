# Sleyt CSS Framework Documentation

This directory contains the official documentation for the Sleyt CSS Framework.

## File Structure

- `index.html` - The main English documentation file
- `index-ja.html` - The Japanese documentation file
- `css/` - Built CSS files for documentation

## Structure of Documentation

Both documentation files are organized to match the source code structure in `src/`:

1. **Header** - Framework name, description, and navigation links
2. **Quick Navigation** - Jump links to main sections
3. **Installation** - Getting started guide with npm and CDN options
4. **Base** - Foundation styles (reset, themes, variables)
5. **Components** - UI components library
6. **Layout** - Layout system (container, flexbox, grid)
7. **Utilities** - Utility classes for rapid development
8. **Footer** - Framework overview and links

## Key Features Documented

### Base (src/base/)
- **reset** - CSS reset and base element styles
- **themes** - Dark mode and theme support
- **variables** - CSS custom properties and design tokens

### Components (src/components/)
- **accordion** - Collapsible content panels
- **alerts** - Notification messages for users
- **badges** - Small status indicators and labels
- **buttons** - Interactive elements with various styles and sizes
- **cards** - Flexible containers for grouping content
- **charts** - Data visualization (bar, line, donut charts)
- **code** - Code block styling
- **forms** - Input fields and form controls
- **navbar** - Navigation components
- **showcase** - Feature showcase components
- **swatch** - Color palette display
- **tables** - Structured data display

### Layout (src/layout/)
- **container** - Responsive container with max-width breakpoints
- **flexbox** - Flexbox utilities for flexible layouts
- **grid** - CSS Grid utilities for complex layouts

### Utilities (src/utilities/)
- **borders** - Border and border-radius utilities
- **colors** - Background and text color classes
- **display** - Display property utilities
- **effects** - Shadow and visual effect utilities
- **glass** - Glass morphism transparency effects
- **position** - Positioning utilities
- **spacing** - Margin and padding utilities
- **typography** - Font size, weight, and text utilities

## Update Rules

When updating documentation, please follow these rules:

1. **Match Implementation** - Class names and usage must match the actual CSS implementation
2. **Maintain Consistency** - Keep descriptions and examples consistent between English and Japanese versions
3. **Provide Examples** - Include both code examples and visual demonstrations
4. **Verify Functionality** - Test that all code examples work correctly
5. **Follow Structure** - Maintain the established section structure

## Documentation Standards

### Code Examples
All code examples use only Sleyt CSS framework classes - no inline styles or custom CSS.

Example format:
```html
<div class="card glass">
  <div class="card-header">
    <h3 class="font-semibold">Title</h3>
  </div>
  <div class="card-body">
    <p class="text-sm text-secondary mb-4">Description</p>
  </div>
</div>
```

### Chart Examples
Charts include proper data attributes for heights and variants:
```html
<div class="bar-chart-item" data-variant="primary" data-height="md">
  <div class="bar-chart-label">Label</div>
</div>
```

## Build and Deploy

To update documentation:

1. Make changes to HTML files
2. Run `npm run build:css` to update CSS files
3. Test locally by opening HTML files
4. Commit changes to update GitHub Pages

## Maintenance Checklist

- [ ] Do class names match the CSS implementation?
- [ ] Are code examples functional?
- [ ] Are new features properly documented?
- [ ] Is responsive design working?
- [ ] Are both English and Japanese versions consistent?
- [ ] Are chart examples displaying correctly?
- [ ] Are glass morphism effects working?