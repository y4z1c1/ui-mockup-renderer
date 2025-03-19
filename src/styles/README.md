# UI Style System

This directory contains the styling system extracted from analyzing the mockups. It includes theme constants, reusable component styles, and examples of how to implement the design system.

## Key Files

- **theme.ts**: Contains color palettes, spacing, typography, and component style definitions
- **component-examples.tsx**: React components demonstrating usage of the theme styling

## Design Patterns

Based on analysis of the mockups, the following consistent patterns were identified:

### Layout Structure

Most mockups follow this structure:

- Container with flexbox column layout
- Header section with title and optional badge/tag
- Content area with padding and overflow handling
- Card-based content organization

### Typography

- Very small text (8px) for dense information displays
- Small text (10px) for secondary content and form labels
- Regular text (12-14px) for main content
- Bold/medium font weights for headers and important text

### Colors

- Gray scale for backgrounds and borders (50-900)
- Green as primary color for CTAs and success states
- Accent colors (blue, yellow, red, purple) for different states and categories
- Status colors for indicating state (success, warning, error, info)

### Components

Common components across mockups:

1. **Cards**: Containers with white background, rounded corners, and subtle borders
2. **Badges/Tags**: Small, rounded pills with colored backgrounds for status or categories
3. **Tables**: Simple data tables with header styling and row separators
4. **Buttons**: Primary (green), secondary (white/gray), and danger (red) variants
5. **Form elements**: Consistent styling for inputs, textareas, selects, and labels

## Usage

The theme system is designed to be used with Tailwind CSS. You can use the component examples as a reference for implementing new UI elements that match the existing design system.

Example:

```tsx
import { Card, Badge, Button } from "../styles/component-examples";

const MyComponent = () => (
  <Card title="Item Details">
    <div className="flex justify-between mb-2">
      <h2 className="text-xs font-medium">Product Name</h2>
      <Badge.Success>In Stock</Badge.Success>
    </div>
    <p className="text-[8px] text-gray-500 mb-2">
      Product description goes here...
    </p>
    <div className="flex justify-end">
      <Button.Primary />
    </div>
  </Card>
);
```

## Font Size Reference

| Class       | Size (rem) | Pixels |
| ----------- | ---------- | ------ |
| text-[8px]  | 0.5rem     | 8px    |
| text-[10px] | 0.625rem   | 10px   |
| text-xs     | 0.75rem    | 12px   |
| text-sm     | 0.875rem   | 14px   |
| text-base   | 1rem       | 16px   |

## Spacing Reference

| Class  | Size (rem) | Pixels |
| ------ | ---------- | ------ |
| p-0.5  | 0.125rem   | 2px    |
| p-1    | 0.25rem    | 4px    |
| p-1.5  | 0.375rem   | 6px    |
| p-2    | 0.5rem     | 8px    |
| p-3    | 0.75rem    | 12px   |
| mb-0.5 | 0.125rem   | 2px    |
| mb-1   | 0.25rem    | 4px    |
| mb-1.5 | 0.375rem   | 6px    |
| mb-2   | 0.5rem     | 8px    |

## Color System

The color system follows a hierarchical approach:

- Primary action colors (mostly green)
- State indication colors (success, error, etc.)
- Information hierarchy (heading, body text, secondary text)
- Background and surface colors (mostly grays)

Most UI elements like headers use bg-gray-50 with darker text, while cards use white backgrounds with gray borders.
