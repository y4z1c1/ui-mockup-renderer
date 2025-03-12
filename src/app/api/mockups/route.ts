import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getFallbackMockups } from "@/utils/mockupLoader";

// Function to recursively scan directories for mockup files
function scanMockupFiles(dir: string, baseDir: string): string[] {
  const mockupFiles: string[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      const subDirFiles = scanMockupFiles(itemPath, baseDir);
      mockupFiles.push(...subDirFiles);
    } else if (item.endsWith(".tsx") && item !== "index.tsx") {
      // Get the relative path from the base mockups directory
      const relativePath = path.relative(baseDir, dir);
      // Create the mockup identifier (folder/name)
      const mockupId = relativePath
        ? `${relativePath.replace(/\\/g, "/")}/${item.replace(".tsx", "")}`
        : item.replace(".tsx", "");

      mockupFiles.push(mockupId);
    }
  }

  return mockupFiles;
}

// API route to get the list of available mockups
export async function GET() {
  try {
    // Server-side code to get mockup files
    const mockupsDir = path.join(process.cwd(), "src", "components", "mockups");

    // Check if the directory exists
    if (!fs.existsSync(mockupsDir)) {
      console.warn(`Mockups directory not found: ${mockupsDir}`);
      return NextResponse.json({ mockups: getFallbackMockups() });
    }

    // Scan the directory recursively
    const mockupFiles = scanMockupFiles(mockupsDir, mockupsDir);

    const mockups = mockupFiles.length > 0 ? mockupFiles : getFallbackMockups();

    return NextResponse.json({ mockups });
  } catch (error) {
    console.error("Error fetching mockups:", error);
    return NextResponse.json(
      { mockups: getFallbackMockups() },
      { status: 200 } // Return 200 with fallback mockups instead of an error
    );
  }
}
