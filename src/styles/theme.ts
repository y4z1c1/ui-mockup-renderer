// Theme constants for UI Renderer application
// Contains common styling patterns extracted from mockups

export const colors = {
  // Primary colors
  primary: {
    50: "#e6f7e6",
    100: "#c3eac3",
    500: "#4caf50",
    600: "#3e8e41",
    700: "#2e7031",
    800: "#1e5020",
  },

  // Accent colors
  accent: {
    blue: {
      50: "#e6f0fa",
      100: "#c3daff",
      600: "#1976d2",
      700: "#0d47a1",
      800: "#1565c0",
    },
    green: {
      50: "#e8f5e9",
      100: "#c8e6c9",
      600: "#43a047",
      700: "#2e7d32",
      800: "#1b5e20",
    },
    yellow: {
      50: "#fffde7",
      100: "#fff9c4",
      600: "#fdd835",
      700: "#f9a825",
      800: "#f57f17",
    },
    red: {
      50: "#ffebee",
      100: "#ffcdd2",
      600: "#e53935",
      700: "#c62828",
      800: "#b71c1c",
    },
    purple: {
      50: "#f3e5f5",
      100: "#e1bee7",
      600: "#8e24aa",
      700: "#6a1b9a",
      800: "#4a148c",
    },
  },

  // Gray scale
  gray: {
    50: "#f8f9fa",
    100: "#f1f3f5",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#868e96",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },

  // Text colors
  text: {
    primary: "#212529",
    secondary: "#495057",
    muted: "#868e96",
    light: "#ffffff",
  },

  // Status colors
  status: {
    success: "#4caf50",
    warning: "#ff9800",
    error: "#f44336",
    info: "#2196f3",
    pending: "#ff9800",
  },
};

export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  xxl: "2rem", // 32px
};

export const fontSizes = {
  xxs: "0.5rem", // 8px (text-[8px])
  xs: "0.625rem", // 10px (text-[10px])
  sm: "0.75rem", // 12px (text-xs)
  base: "0.875rem", // 14px (text-sm)
  md: "1rem", // 16px (text-base)
  lg: "1.125rem", // 18px (text-lg)
  xl: "1.25rem", // 20px (text-xl)
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const borderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  md: "0.25rem", // 4px
  lg: "0.375rem", // 6px
  xl: "0.5rem", // 8px
  full: "9999px", // For rounded pills and circles
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
};

// Common component styles
export const components = {
  // Card styles
  card: {
    base: "bg-white border border-gray-200 rounded-lg p-2",
    header: "font-medium text-sm mb-1.5",
  },

  // Button styles
  button: {
    primary:
      "bg-green-600 text-white px-2 py-1 rounded text-xs font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
    secondary:
      "bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    danger:
      "bg-red-600 text-white px-2 py-1 rounded text-xs font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
  },

  // Form styles
  input: {
    base: "w-full border border-gray-300 rounded p-1 text-xs focus:ring-blue-500 focus:border-blue-500",
    label: "block text-xs font-medium text-gray-700 mb-0.5",
  },

  // Badge/tag styles
  badge: {
    base: "inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium",
    success: "bg-green-100 text-green-800",
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  },

  // Header styles
  header: {
    page: "bg-gray-50 p-1.5 border-b",
    title: "text-sm font-bold text-gray-800",
  },

  // Layout
  layout: {
    container: "flex flex-col bg-white w-full h-full overflow-auto",
    content: "p-2 overflow-auto",
  },

  // Table styles
  table: {
    container: "border rounded overflow-hidden",
    header: "bg-gray-50",
    headerCell: "text-left p-0.5 text-xs font-medium",
    row: "border-t",
    cell: "p-0.5 text-xs",
  },
};

// Export default theme object
const theme = {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
  shadows,
  components,
};

export default theme;
