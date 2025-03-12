import React from 'react';

const AddInventoryItem = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Add Inventory Item</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Store Owner
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Basic Info */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Product Name</label>
                    <input
                        type="text"
                        className="w-full border rounded p-1 text-[10px]"
                        placeholder="Enter product name"
                    />
                </div>

                <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                    <div>
                        <label className="block text-[10px] font-medium mb-0.5">Price (TL)</label>
                        <input
                            type="text"
                            className="w-full border rounded p-1 text-[10px]"
                            placeholder="0.00"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-medium mb-0.5">Stock Quantity</label>
                        <input
                            type="text"
                            className="w-full border rounded p-1 text-[10px]"
                            placeholder="0"
                        />
                    </div>
                </div>

                {/* Dietary Options */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Dietary Options</label>
                    <div className="flex gap-1.5">
                        <label className="flex items-center text-[8px]">
                            <input type="checkbox" className="mr-0.5" />
                            Vegetarian
                        </label>
                        <label className="flex items-center text-[8px]">
                            <input type="checkbox" className="mr-0.5" />
                            Vegan
                        </label>
                        <label className="flex items-center text-[8px]">
                            <input type="checkbox" className="mr-0.5" />
                            Celiac
                        </label>
                    </div>
                </div>

                {/* Nutrition Link */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Link to Food Database</label>
                    <select className="w-full border rounded p-1 text-[10px]">
                        <option>Select food item from database</option>
                        <option>Apples, fresh</option>
                        <option>Eggs, large</option>
                        <option>Bread, whole wheat</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-1.5">
                    <button className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-[8px]">Cancel</button>
                    <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px]">Save Item</button>
                </div>
            </div>
        </div>
    );
};

export default AddInventoryItem; 