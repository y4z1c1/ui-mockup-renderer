import { MockupRegistry } from "..";
import EmailSentConfirmation from "./email-sent-confirmation";
import LoginScreen from "./login-screen";
import NewPasswordCreation from "./new-password-creation";
import PasswordRecoveryRequest from "./password-recovery-request";
import RecipeDetailView from "./recipe-detail-view";
import UserProfileLikedRecipes from "./user-profile-liked-recipes";

// Export all mockups from this use case
const useCaseMockups: MockupRegistry = {
  "email-sent-confirmation": EmailSentConfirmation,
  "login-screen": LoginScreen,
  "new-password-creation": NewPasswordCreation,
  "password-recovery-request": PasswordRecoveryRequest,
  "recipe-detail-view": RecipeDetailView,
  "user-profile-liked-recipes": UserProfileLikedRecipes,
};

export default useCaseMockups;
