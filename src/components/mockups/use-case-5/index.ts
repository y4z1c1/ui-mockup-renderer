import { MockupRegistry } from "..";

import MealPlannerSetup from "./meal-planner-setup";
import WeeklyMealPlan from "./weekly-meal-plan";
import SavedMealPlans from "./saved-meal-plans";
import ShareMealPlan from "./share-meal-plan";

// Export all mockups from this use case
const useCaseMockups: MockupRegistry = {
  "meal-planner-setup": MealPlannerSetup,
  "weekly-meal-plan": WeeklyMealPlan,
  "saved-meal-plans": SavedMealPlans,
  "share-meal-plan": ShareMealPlan,
};

export default useCaseMockups;
