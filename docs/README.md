# Sleyt CSS Framework Documentation

This directory contains the official documentation for the Sleyt CSS Framework.

## File Structure

- `index.html` - The main documentation file. Explains the framework overview, components, and how to use utilities.

## Structure of index.html

`index.html` consists of the following sections:

1. **Header** - The framework name and a brief description
2. **Base** - Explanation of basic elements such as reset, variables, themes, etc.
3. **Components** - Description of UI components such as alerts, badges, buttons, cards, etc.
4. **Layout** - Description of layout elements such as containers, grid, flexbox, etc.
5. **Utilities** - Description of utility classes for borders, colors, display, effects, position, spacing, typography, etc.
6. **Footer** - Framework overview information

## Update Rules

When updating documentation, please follow these rules:

1. **Match Implementation** - Class names and usage described in the documentation must match the actual implementation.
   - Example: If the implemented class name is `.relative` without a prefix, document it as `.relative` rather than `.position-relative`

2. **Maintain Consistency** - Keep descriptions of class names, variable names, etc. consistent.

3. **Provide Examples** - Whenever possible, provide usage examples for each feature. It's best to have both code examples and visual examples.

4. **Verify Previews** - When adding code examples, verify that they actually work.

5. **Maintain Structure** - When adding new sections or examples, follow the existing structure.

## Documentation Update Checklist

- [ ] Do class names match the implementation?
- [ ] Do code examples function correctly?
- [ ] Are new features or changes properly reflected?
- [ ] Does responsive design function properly?
- [ ] Is overall consistency maintained?

## Style Guide for Code Samples

When adding code samples, use the following format:

```html
<div class="example-class">
  <!-- Content -->
</div>
```

## Adding New Components or Utilities

When adding new components or utilities, include the following information:

1. The name and brief description of the component/utility
2. Available classes and their variations
3. Basic usage examples
4. Actual display examples
5. Related variables or settings (if applicable)

## Maintenance

Update the documentation at the following times:

- When adding new features
- When changing existing features
- When fixing bugs (if they have an impact)
- During regular reviews (recommended quarterly)

## Build and Deploy

To test documentation changes:

1. Open the HTML file locally to verify display
2. If there are CSS changes, run the build process as needed

## Issues and Feedback

Please report any issues or feedback about the documentation to the issue tracker.