import { MockupRegistry } from "..";

import InventoryManagement from "./inventory-management";
import AddInventoryItem from "./add-inventory-item";
import EditInventoryItem from "./edit-inventory-item";

// Export all mockups from this use case
const useCaseMockups: MockupRegistry = {
  "inventory-management": InventoryManagement,
  "add-inventory-item": AddInventoryItem,
  "edit-inventory-item": EditInventoryItem,
};

export default useCaseMockups;
