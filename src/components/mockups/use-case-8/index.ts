import { MockupRegistry } from "..";
import FoodSearch from "./food-search";
import FoodDetail from "./food-detail";
import FoodCompare from "./food-compare";
import FoodItemProposal from "./food-item-proposal";
import ProposalConfirmation from "./proposal-confirmation";
import QuinoaSearch from "./quinoa-search";
import TeffProposal from "./teff-proposal";
import ApprovalNotification from "./approval-notification";

const useCaseMockups: MockupRegistry = {
  "food-search": FoodSearch,
  "food-detail": FoodDetail,
  "food-compare": FoodCompare,
  "food-item-proposal": FoodItemProposal,
  "proposal-confirmation": ProposalConfirmation,
  "quinoa-search": QuinoaSearch,
  "teff-proposal": TeffProposal,
  "approval-notification": ApprovalNotification,
};

export default useCaseMockups;
