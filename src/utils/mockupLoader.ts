// This file contains utility functions for loading mockups

// Helper function to format mockup names for display
export function formatMockupName(name: string): string {
  // Handle kebab-case, camelCase, PascalCase, and snake_case
  return (
    name
      // Replace hyphens and underscores with spaces
      .replace(/[-_]/g, " ")
      // Add space before capital letters (for camelCase and PascalCase)
      .replace(/([A-Z])/g, " $1")
      // Capitalize first letter of each word
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
      .trim()
  );
}

// Fallback list of mockups
export function getFallbackMockups() {
  return [
    "use-case-6/login-screen",
    "use-case-6/password-recovery-request",
    "use-case-6/email-sent-confirmation",
    "use-case-6/new-password-creation",
  ];
}

// Helper function to check if a mockup exists
export async function checkMockupExists(name: string): Promise<boolean> {
  try {
    // For the new folder structure, the name already includes the path
    await import(`@/components/mockups/${name}`);
    return true;
  } catch (error) {
    console.error(`Error loading mockup ${name}:`, error);
    return false;
  }
}
