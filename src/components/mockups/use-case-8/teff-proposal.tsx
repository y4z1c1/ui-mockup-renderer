import React from 'react';

// Teff proposal page - Arda enters nutritional information
const TeffProposal = () => {
    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="bg-blue-50 p-1.5 border-b flex items-center">
                <button className="mr-1">
                    <span className="text-base">←</span>
                </button>
                <h1 className="text-sm font-medium flex-1">Add New Food Item</h1>
                <div className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full text-xs">
                    Arda
                </div>
            </div>

            {/* Content */}
            <div className="p-1.5 overflow-auto flex-1">
                <div className="bg-blue-50 rounded p-1.5 mb-1.5 flex items-center">
                    <span className="text-lg mr-1">💡</span>
                    <div>
                        <h2 className="text-xs font-medium text-blue-800">Help improve our database</h2>
                        <p className="text-[10px] text-blue-700">
                            Your submission will be reviewed by our moderators.
                        </p>
                    </div>
                </div>

                <form className="space-y-1.5">
                    {/* Basic Information */}
                    <div className="bg-white rounded border p-1.5">
                        <h2 className="font-medium mb-1 text-xs flex items-center">
                            <span className="text-base mr-1">📝</span>
                            Basic Information
                        </h2>

                        <div className="space-y-1.5">
                            <div>
                                <label className="block text-[10px] font-medium mb-0.5">Food Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded py-0.5 px-1.5 text-xs"
                                    value="Teff"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-1.5">
                                <div>
                                    <label className="block text-[10px] font-medium mb-0.5">Category</label>
                                    <select className="w-full border rounded py-0.5 px-1.5 text-xs">
                                        <option selected>Grains</option>
                                        <option>Vegetables</option>
                                        <option>Fruits</option>
                                        <option>Proteins</option>
                                        <option>Dairy</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-medium mb-0.5">Serving Size</label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            className="w-full border rounded-l py-0.5 px-1.5 text-xs"
                                            value="100"
                                        />
                                        <select className="border border-l-0 rounded-r py-0.5 px-1.5 bg-gray-50 text-xs">
                                            <option selected>g</option>
                                            <option>ml</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-medium mb-0.5">Description</label>
                                <textarea
                                    className="w-full border rounded py-0.5 px-1.5 text-xs"
                                    rows={1}
                                    value="Teff is a nutrient-dense ancient grain from Ethiopia."
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Required Nutrition */}
                    <div className="bg-white rounded border p-1.5">
                        <h2 className="font-medium mb-1 text-xs flex items-center">
                            <span className="text-base mr-1">🔍</span>
                            Required Nutrition
                            <span className="ml-0.5 text-red-500 text-[10px]">*</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-1.5">
                            <div>
                                <label className="block text-[10px] font-medium mb-0.5">
                                    Calories <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded py-0.5 px-1.5 text-xs"
                                    value="101"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-medium mb-0.5">
                                    Protein (g) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded py-0.5 px-1.5 text-xs"
                                    value="3.9"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-medium mb-0.5">
                                    Carbs (g) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded py-0.5 px-1.5 text-xs"
                                    value="20"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-medium mb-0.5">
                                    Fat (g) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded py-0.5 px-1.5 text-xs"
                                    value="0.6"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Optional Nutrition */}
                    <div className="bg-white rounded border p-1.5">
                        <h2 className="font-medium mb-1 text-xs flex items-center">
                            <span className="text-base mr-1">✨</span>
                            Optional Micronutrients
                        </h2>

                        <div className="grid grid-cols-2 gap-1.5">
                            <div>
                                <label className="block text-[10px] font-medium mb-0.5">Iron (mg)</label>
                                <input
                                    type="text"
                                    className="w-full border rounded py-0.5 px-1.5 text-xs"
                                    value="2.3"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-medium mb-0.5">Calcium (mg)</label>
                                <input
                                    type="text"
                                    className="w-full border rounded py-0.5 px-1.5 text-xs"
                                    value="11"
                                />
                            </div>
                        </div>

                        <div className="mt-0.5 text-right">
                            <button type="button" className="text-blue-600 text-[10px]">
                                + Add More
                            </button>
                        </div>
                    </div>

                    {/* Dietary Tags */}
                    <div className="bg-white rounded border p-1.5">
                        <h2 className="font-medium mb-1 text-xs flex items-center">
                            <span className="text-base mr-1">🏷️</span>
                            Dietary Tags
                        </h2>

                        <div className="flex flex-wrap gap-1.5">
                            {["Vegan", "Vegetarian", "Gluten-Free", "Organic", "High Fiber", "Whole Grain"].map((tag) => (
                                <label key={tag} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-2.5 h-2.5 text-blue-600 rounded mr-0.5"
                                        checked={["Vegan", "Gluten-Free", "High Fiber", "Whole Grain"].includes(tag)}
                                    />
                                    <span className="text-[10px]">{tag}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="sticky bottom-0 bg-white pt-1 border-t">
                        <div className="flex justify-end gap-1.5">
                            <button
                                type="button"
                                className="border rounded py-0.5 px-2 text-[10px] text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white rounded py-0.5 px-2 text-[10px]"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeffProposal; 