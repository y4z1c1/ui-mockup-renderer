import { MockupRegistry } from "..";
import ModerationDashboard from "./moderation-dashboard";
import ReportReview from "./report-review";
import CertificateVerification from "./certificate-verification";
import FoodItemReview from "./food-item-review";
import ModerationHistory from "./moderation-history";

const useCaseMockups: MockupRegistry = {
  "moderation-dashboard": ModerationDashboard,
  "report-review": ReportReview,
  "certificate-verification": CertificateVerification,
  "food-item-review": FoodItemReview,
  "moderation-history": ModerationHistory,
};

export default useCaseMockups;
