import { MockupRegistry } from "..";
import MealPlanner from "./meal-planner";
import ShoppingList from "./shopping-list";
import ForumPost from "./forum-post";

const useCaseMockups: MockupRegistry = {
  "meal-planner": MealPlanner,
  "shopping-list": ShoppingList,
  "forum-post": ForumPost,
};

export default useCaseMockups;
