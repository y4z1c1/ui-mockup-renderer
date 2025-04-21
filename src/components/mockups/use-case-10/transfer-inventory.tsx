import React from 'react';
import theme from '../../../styles/theme';

// transfer inventory mockup component for use case 10
const TransferInventory = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Transfer Inventory</h1>
                    <span className="bg-green-100 text-green-800 text-[8px] px-1 py-0.5 rounded-full">
                        Lisa
                    </span>
                </div>
            </div>

            {/* content */}
            <div className={theme.components.layout.content}>
                {/* store selection */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-1.5 mb-2">
                    <h3 className="text-xs font-medium text-blue-800 mb-1">Select Stores</h3>

                    <div className="grid grid-cols-2 gap-1.5">
                        {/* from store */}
                        <div className="bg-white rounded p-1 text-[10px]">
                            <div className="font-medium text-gray-700 mb-0.5">From:</div>
                            <div className="flex items-center">
                                <span className="mr-1 text-green-600">📦</span>
                                <div>
                                    <div className="font-medium">Lisa's Fresh Market</div>
                                    <div className="text-gray-600">123 Main Street</div>
                                </div>
                            </div>
                            <div className="mt-1 text-[8px] text-gray-500">
                                120 products listed
                            </div>
                        </div>

                        {/* to store */}
                        <div className="bg-white rounded p-1 text-[10px]">
                            <div className="font-medium text-gray-700 mb-0.5">To:</div>
                            <div className="flex items-center">
                                <span className="mr-1 text-green-600">📦</span>
                                <div>
                                    <div className="font-medium">Lisa's Fresh Market - East Side</div>
                                    <div className="text-gray-600">150 Greenway Ave</div>
                                </div>
                            </div>
                            <div className="mt-1 text-[8px] text-gray-500">
                                0 products listed
                            </div>
                        </div>
                    </div>
                </div>

                {/* product search */}
                <div className="mb-1.5">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="flex-1 border border-gray-300 rounded-l p-1 text-[10px]"
                        />
                        <button className="bg-gray-100 border border-l-0 border-gray-300 rounded-r px-1 text-[10px]">
                            🔍
                        </button>
                    </div>
                </div>

                {/* category filter */}
                <div className="mb-1.5 flex items-center space-x-1 overflow-x-auto">
                    <span className="text-[8px] text-gray-500">Filter:</span>
                    <button className="bg-green-100 text-green-800 text-[8px] px-1 py-0.5 rounded-full whitespace-nowrap">
                        Fresh Produce
                    </button>
                    <button className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full whitespace-nowrap">
                        Dairy
                    </button>
                    <button className="bg-gray-100 text-gray-800 text-[8px] px-1 py-0.5 rounded-full whitespace-nowrap">
                        Pantry
                    </button>
                    <button className="bg-gray-100 text-gray-800 text-[8px] px-1 py-0.5 rounded-full whitespace-nowrap">
                        Bulk
                    </button>
                </div>

                {/* product list */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-2">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xs font-medium">Select Items to Transfer</h3>
                        <span className="text-[8px] text-blue-600">Select All</span>
                    </div>

                    {/* items */}
                    <div className="space-y-1">
                        {/* item 1 */}
                        <div className="border border-green-200 bg-green-50 rounded-md p-1 flex items-start">
                            <input type="checkbox" className="mt-0.5 mr-1.5" checked />
                            <div className="flex-1 text-[10px]">
                                <div className="font-medium">Organic Apples</div>
                                <div className="flex items-center justify-between mt-0.5">
                                    <span className="text-gray-600">$2.99/lb • 45 in stock</span>
                                    <span className="bg-green-100 text-green-800 text-[8px] px-1 rounded">Fresh Produce</span>
                                </div>
                            </div>
                        </div>

                        {/* item 2 */}
                        <div className="border border-green-200 bg-green-50 rounded-md p-1 flex items-start">
                            <input type="checkbox" className="mt-0.5 mr-1.5" checked />
                            <div className="flex-1 text-[10px]">
                                <div className="font-medium">Leafy Greens Mix</div>
                                <div className="flex items-center justify-between mt-0.5">
                                    <span className="text-gray-600">$3.50/bunch • 30 in stock</span>
                                    <span className="bg-green-100 text-green-800 text-[8px] px-1 rounded">Fresh Produce</span>
                                </div>
                            </div>
                        </div>

                        {/* item 3 */}
                        <div className="border border-blue-200 bg-blue-50 rounded-md p-1 flex items-start">
                            <input type="checkbox" className="mt-0.5 mr-1.5" checked />
                            <div className="flex-1 text-[10px]">
                                <div className="font-medium">Organic Milk</div>
                                <div className="flex items-center justify-between mt-0.5">
                                    <span className="text-gray-600">$4.25/gallon • 25 in stock</span>
                                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 rounded">Dairy</span>
                                </div>
                            </div>
                        </div>

                        {/* item 4 */}
                        <div className="border border-blue-200 bg-blue-50 rounded-md p-1 flex items-start">
                            <input type="checkbox" className="mt-0.5 mr-1.5" checked />
                            <div className="flex-1 text-[10px]">
                                <div className="font-medium">Local Yogurt</div>
                                <div className="flex items-center justify-between mt-0.5">
                                    <span className="text-gray-600">$3.75/16oz • 40 in stock</span>
                                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 rounded">Dairy</span>
                                </div>
                            </div>
                        </div>

                        {/* item 5 - not selected */}
                        <div className="border border-gray-200 rounded-md p-1 flex items-start">
                            <input type="checkbox" className="mt-0.5 mr-1.5" />
                            <div className="flex-1 text-[10px]">
                                <div className="font-medium">Brown Rice (Bulk)</div>
                                <div className="flex items-center justify-between mt-0.5">
                                    <span className="text-gray-600">$1.99/lb • 50lbs in stock</span>
                                    <span className="bg-gray-100 text-gray-800 text-[8px] px-1 rounded">Bulk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* transfer options */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-2">
                    <h3 className="text-xs font-medium mb-1">Transfer Options</h3>

                    <div className="space-y-1">
                        <div className="flex items-center text-[10px]">
                            <input type="radio" id="option1" name="transferOption" className="mr-1" checked />
                            <label htmlFor="option1">
                                <span className="font-medium">Move items</span>
                                <span className="text-gray-500"> - Remove from original store</span>
                            </label>
                        </div>

                        <div className="flex items-center text-[10px]">
                            <input type="radio" id="option2" name="transferOption" className="mr-1" />
                            <label htmlFor="option2">
                                <span className="font-medium">Copy items</span>
                                <span className="text-gray-500"> - Keep in both stores</span>
                            </label>
                        </div>

                        <div className="flex items-center text-[10px]">
                            <input type="checkbox" id="adjust" className="mr-1" checked />
                            <label htmlFor="adjust">
                                <span className="font-medium">Adjust quantities</span>
                                <span className="text-gray-500"> - Split inventory between stores</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* summary */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-1.5 mb-2">
                    <div className="flex items-start">
                        <span className="text-lg mr-1">📋</span>
                        <div>
                            <h3 className="text-xs font-medium text-amber-800">Transfer Summary</h3>
                            <p className="text-[8px] text-amber-700 mb-1">
                                You're transferring 4 products to your East Side location. These items will be removed
                                from your original store's listings.
                            </p>
                            <div className="bg-white rounded p-1 text-[8px]">
                                <div>• 4 products selected (2 Produce, 2 Dairy)</div>
                                <div>• Estimated market value: $425.50</div>
                                <div>• New East Side inventory: 4 products</div>
                                <div>• Remaining Main Street inventory: 116 products</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* action buttons */}
                <div className="flex justify-between">
                    <button className={theme.components.button.secondary}>
                        Cancel
                    </button>
                    <button className={theme.components.button.primary}>
                        Complete Transfer
                    </button>
                </div>

                {/* note */}
                <div className="mt-2 text-[8px] text-gray-500 text-center">
                    After transferring inventory, you'll be able to update prices and images
                    for each store location independently.
                </div>
            </div>
        </div>
    );
};

export default TransferInventory; 