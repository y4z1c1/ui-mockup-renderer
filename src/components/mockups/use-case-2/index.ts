import { MockupRegistry } from "..";

import DietitianVerification from "./dietitian-verification";
import ProfessionalRecipeCreation from "./professional-recipe-creation";
import ProfessionalForumPost from "./professional-forum-post";

// Export all mockups from this use case
const useCaseMockups: MockupRegistry = {
  "dietitian-verification": DietitianVerification,
  "professional-recipe-creation": ProfessionalRecipeCreation,
  "professional-forum-post": ProfessionalForumPost,
};

export default useCaseMockups;
