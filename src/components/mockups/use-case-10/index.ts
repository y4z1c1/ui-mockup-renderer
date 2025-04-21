import { MockupRegistry } from "..";
import CreateNewStore from "./create-new-store";
import TransferInventory from "./transfer-inventory";

const useCaseMockups: MockupRegistry = {
  "create-new-store": CreateNewStore,
  "transfer-inventory": TransferInventory,
};

export default useCaseMockups;
