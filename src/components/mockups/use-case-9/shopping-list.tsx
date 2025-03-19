import React from 'react';
import theme from '../../../styles/theme';

// Shopping list optimization mockup component for Use Case 9
const ShoppingList = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* Header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Shopping List</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Sam
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={theme.components.layout.content}>
                {/* Summary Banner */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-1.5 mb-1.5">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xs font-medium text-green-800">March 18-24 Groceries</h3>
                            <p className="text-[8px] text-green-700">21 items from your weekly meal plan</p>
                        </div>
                        <div className="text-right">
                            <div className="text-xs font-medium text-green-800">Est. Total: $28.75</div>
                            <div className="text-[8px] text-green-700">Optimized: Save $16.25</div>
                        </div>
                    </div>
                </div>

                {/* Store Selection */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-1.5">
                    <h3 className="text-xs font-medium mb-1">Compare Grocery Stores</h3>

                    <div className="space-y-1">
                        <div className="flex justify-between items-center p-1 bg-gray-50 rounded border border-gray-100">
                            <div className="flex items-center">
                                <input type="checkbox" checked className="w-2.5 h-2.5 mr-1" />
                                <div>
                                    <div className="text-[10px] font-medium">SaveMart</div>
                                    <div className="text-[8px] text-gray-500">1.2 miles away</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-medium">$31.50</div>
                                <div className="text-[8px] text-gray-500">8 items cheapest</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-1 bg-blue-50 rounded border border-blue-200">
                            <div className="flex items-center">
                                <input type="checkbox" checked className="w-2.5 h-2.5 mr-1" />
                                <div>
                                    <div className="text-[10px] font-medium text-blue-800">ValueGrocer</div>
                                    <div className="text-[8px] text-blue-700">2.5 miles away</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-medium text-blue-800">$28.75</div>
                                <div className="text-[8px] text-blue-700">13 items cheapest</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-1 bg-gray-50 rounded border border-gray-100">
                            <div className="flex items-center">
                                <input type="checkbox" className="w-2.5 h-2.5 mr-1" />
                                <div>
                                    <div className="text-[10px] font-medium">FreshMarket</div>
                                    <div className="text-[8px] text-gray-500">0.8 miles away</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-medium">$42.20</div>
                                <div className="text-[8px] text-gray-500">0 items cheapest</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shopping List Items */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-1.5">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xs font-medium">Optimized Shopping List</h3>
                        <div className="flex space-x-1">
                            <select className="text-[8px] border rounded py-0.5 px-1">
                                <option>Sort by Category</option>
                                <option selected>Sort by Store</option>
                                <option>Sort by Price</option>
                            </select>
                        </div>
                    </div>

                    {/* SaveMart Section */}
                    <div className="mb-1">
                        <div className="bg-gray-100 rounded-full px-1.5 py-0.5 text-[8px] font-medium text-gray-800 inline-block mb-0.5">
                            SaveMart (8 items)
                        </div>

                        <div className="space-y-0.5">
                            {/* Item rows */}
                            <div className="flex justify-between items-center py-0.5 border-b border-dashed border-gray-100">
                                <div className="flex items-start">
                                    <input type="checkbox" className="w-2.5 h-2.5 mt-0.5 mr-1" />
                                    <div>
                                        <div className="text-[10px]">Oatmeal, rolled (1 lb)</div>
                                        <div className="text-[8px] text-gray-500">Breakfast - 7 servings</div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-medium">$2.49</div>
                            </div>

                            <div className="flex justify-between items-center py-0.5 border-b border-dashed border-gray-100">
                                <div className="flex items-start">
                                    <input type="checkbox" className="w-2.5 h-2.5 mt-0.5 mr-1" />
                                    <div>
                                        <div className="text-[10px]">Bananas (6 count)</div>
                                        <div className="text-[8px] text-gray-500">Breakfast - 6 servings</div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-medium">$1.29</div>
                            </div>

                            <div className="flex justify-between items-center py-0.5">
                                <div className="flex items-start">
                                    <input type="checkbox" className="w-2.5 h-2.5 mt-0.5 mr-1" />
                                    <div>
                                        <div className="text-[10px]">Brown Rice (2 lb)</div>
                                        <div className="text-[8px] text-gray-500">Dinner - 8 servings</div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-medium">$3.89</div>
                            </div>

                            <div className="text-[8px] text-right text-gray-500">
                                + 5 more items
                            </div>
                        </div>
                    </div>

                    {/* ValueGrocer Section */}
                    <div>
                        <div className="bg-blue-100 rounded-full px-1.5 py-0.5 text-[8px] font-medium text-blue-800 inline-block mb-0.5">
                            ValueGrocer (13 items)
                        </div>

                        <div className="space-y-0.5">
                            {/* Item rows */}
                            <div className="flex justify-between items-center py-0.5 border-b border-dashed border-gray-100">
                                <div className="flex items-start">
                                    <input type="checkbox" className="w-2.5 h-2.5 mt-0.5 mr-1" />
                                    <div>
                                        <div className="text-[10px]">Black Beans (15 oz can, 4-pack)</div>
                                        <div className="text-[8px] text-gray-500">Dinner - 5 servings</div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-medium">$2.99</div>
                            </div>

                            <div className="flex justify-between items-center py-0.5 border-b border-dashed border-gray-100">
                                <div className="flex items-start">
                                    <input type="checkbox" className="w-2.5 h-2.5 mt-0.5 mr-1" />
                                    <div>
                                        <div className="text-[10px]">Whole Wheat Bread (1 loaf)</div>
                                        <div className="text-[8px] text-gray-500">Lunch - 7 servings</div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-medium">$1.89</div>
                            </div>

                            <div className="flex justify-between items-center py-0.5">
                                <div className="flex items-start">
                                    <input type="checkbox" className="w-2.5 h-2.5 mt-0.5 mr-1" />
                                    <div>
                                        <div className="text-[10px]">Lentils (1 lb bag)</div>
                                        <div className="text-[8px] text-gray-500">Lunch - 4 servings</div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-medium">$1.29</div>
                            </div>

                            <div className="text-[8px] text-right text-gray-500">
                                + 10 more items
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button className={theme.components.button.secondary}>
                        Edit List
                    </button>
                    <button className={theme.components.button.primary}>
                        Save List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingList; 