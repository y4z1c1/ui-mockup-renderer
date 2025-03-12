import { MockupRegistry } from "..";

import FoodDatabaseSearch from "./food-database-search";
import ProposeFoodItem from "./propose-food-item";
import RecipeCreation from "./recipe-creation";
import MealPlanner from "./meal-planner";

// Export all mockups from this use case
const useCaseMockups: MockupRegistry = {
  "food-database-search": FoodDatabaseSearch,
  "propose-food-item": ProposeFoodItem,
  "recipe-creation": RecipeCreation,
  "meal-planner": MealPlanner,
};

export default useCaseMockups;
