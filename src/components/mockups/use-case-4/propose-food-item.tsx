import React from 'react';

const ProposeFoodItem = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Propose New Food Item</h1>
                    <span className="bg-purple-100 text-purple-800 text-[8px] px-1 py-0.5 rounded-full">
                        Celiac
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Basic Info */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Food Item Name</label>
                    <input
                        type="text"
                        className="w-full border rounded p-1 text-[10px]"
                        value="Chickpea flour blend"
                    />
                </div>

                {/* Nutritional Information */}
                <div className="mb-1.5">
                    <div className="text-[10px] font-medium mb-0.5">Nutritional Information (per 100g)</div>
                    <div className="grid grid-cols-2 gap-1.5">
                        <div>
                            <label className="block text-[8px] mb-0.5">Calories</label>
                            <input
                                type="text"
                                className="w-full border rounded p-1 text-[10px]"
                                value="356"
                            />
                        </div>
                        <div>
                            <label className="block text-[8px] mb-0.5">Protein (g)</label>
                            <input
                                type="text"
                                className="w-full border rounded p-1 text-[10px]"
                                value="21"
                            />
                        </div>
                        <div>
                            <label className="block text-[8px] mb-0.5">Carbs (g)</label>
                            <input
                                type="text"
                                className="w-full border rounded p-1 text-[10px]"
                                value="58"
                            />
                        </div>
                        <div>
                            <label className="block text-[8px] mb-0.5">Fat (g)</label>
                            <input
                                type="text"
                                className="w-full border rounded p-1 text-[10px]"
                                value="6"
                            />
                        </div>
                        <div>
                            <label className="block text-[8px] mb-0.5">Fiber (g)</label>
                            <input
                                type="text"
                                className="w-full border rounded p-1 text-[10px]"
                                value="10"
                            />
                        </div>
                    </div>
                </div>

                {/* Dietary Tags */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Dietary Suitability</label>
                    <div className="flex flex-wrap gap-1.5">
                        <label className="flex items-center text-[8px]">
                            <input type="checkbox" className="mr-0.5" checked />
                            Vegetarian
                        </label>
                        <label className="flex items-center text-[8px]">
                            <input type="checkbox" className="mr-0.5" checked />
                            Vegan
                        </label>
                        <label className="flex items-center text-[8px]">
                            <input type="checkbox" className="mr-0.5" checked />
                            Celiac
                        </label>
                        <label className="flex items-center text-[8px]">
                            <input type="checkbox" className="mr-0.5" />
                            Dairy-Free
                        </label>
                        <label className="flex items-center text-[8px]">
                            <input type="checkbox" className="mr-0.5" />
                            Nut-Free
                        </label>
                    </div>
                </div>

                {/* Nutrition Score */}
                <div className="mb-1.5 border rounded p-1.5 bg-gray-50">
                    <div className="text-[10px] font-medium mb-0.5">Calculated Nutrition Score</div>
                    <div className="flex items-center">
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-[12px] font-bold">
                            A
                        </span>
                        <span className="text-[8px] text-gray-600 ml-1">
                            High protein, high fiber, low fat
                        </span>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Description</label>
                    <textarea
                        className="w-full border rounded p-1 text-[10px]"
                        rows={2}
                        value="A gluten-free flour blend made primarily from chickpeas with rice flour and tapioca starch. Perfect for flatbreads and other baked goods."
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-1.5">
                    <button className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-[8px]">Cancel</button>
                    <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px]">Submit Proposal</button>
                </div>
            </div>
        </div>
    );
};

export default ProposeFoodItem; 