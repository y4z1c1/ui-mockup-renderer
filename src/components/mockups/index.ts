import { ReactElement } from "react";

// Define the type for mockup components
export interface MockupRegistry {
  [key: string]: React.ComponentType<any>;
}

// Import mockups from use cases
import useCaseMockups from "./use-case-6";
import useCase1Mockups from "./use-case-1";
import useCase2Mockups from "./use-case-2";
import useCase3Mockups from "./use-case-3";
import useCase4Mockups from "./use-case-4";
import useCase5Mockups from "./use-case-5";
import useCase7Mockups from "./use-case-7";
import useCase8Mockups from "./use-case-8";
import useCase9Mockups from "./use-case-9";

// Create a registry of all mockups with prefixed keys
const mockups: MockupRegistry = {};

// Add use case 6 mockups with prefix
Object.keys(useCaseMockups).forEach((key) => {
  mockups[`use-case-6/${key}`] = useCaseMockups[key];
});

// Add use case 1 mockups with prefix
Object.keys(useCase1Mockups).forEach((key) => {
  mockups[`use-case-1/${key}`] = useCase1Mockups[key];
});

// Add use case 2 mockups with prefix
Object.keys(useCase2Mockups).forEach((key) => {
  mockups[`use-case-2/${key}`] = useCase2Mockups[key];
});

// Add use case 3 mockups with prefix
Object.keys(useCase3Mockups).forEach((key) => {
  mockups[`use-case-3/${key}`] = useCase3Mockups[key];
});

// Add use case 4 mockups with prefix
Object.keys(useCase4Mockups).forEach((key) => {
  mockups[`use-case-4/${key}`] = useCase4Mockups[key];
});

// Add use case 5 mockups with prefix
Object.keys(useCase5Mockups).forEach((key) => {
  mockups[`use-case-5/${key}`] = useCase5Mockups[key];
});

// Add use case 7 mockups with prefix
Object.keys(useCase7Mockups).forEach((key) => {
  mockups[`use-case-7/${key}`] = useCase7Mockups[key];
});

// Add use case 8 mockups with prefix
Object.keys(useCase8Mockups).forEach((key) => {
  mockups[`use-case-8/${key}`] = useCase8Mockups[key];
});

// Add use case 9 mockups with prefix
Object.keys(useCase9Mockups).forEach((key) => {
  mockups[`use-case-9/${key}`] = useCase9Mockups[key];
});

// Function to add more use cases in the future
export function addUseCaseMockups(
  useCaseName: string,
  mockupsObject: MockupRegistry
): void {
  Object.keys(mockupsObject).forEach((key) => {
    mockups[`${useCaseName}/${key}`] = mockupsObject[key];
  });
}

export default mockups;
