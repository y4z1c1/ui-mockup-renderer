import { MockupRegistry } from "..";
import RecipeForumPost from "./recipe-forum-post";
import RecipeCreationPage from "./recipe-creation-page";
import IngredientLinking from "./ingredient-linking";

// Export all mockups from this use case
const useCaseMockups: MockupRegistry = {
  "recipe-forum-post": RecipeForumPost,
  "recipe-creation-page": RecipeCreationPage,
  "ingredient-linking": IngredientLinking,
};

export default useCaseMockups;
