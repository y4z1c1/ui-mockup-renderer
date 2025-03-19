import React from 'react';
import theme from '../../../styles/theme';

// Food item proposal mockup component for Use Case 8
const FoodItemProposal = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* Header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Propose New Food</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Student
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={theme.components.layout.content}>
                {/* Info Notice */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5 mb-2">
                    <div className="flex items-start">
                        <div>
                            <h3 className="text-xs font-medium text-gray-800">Add to our food database</h3>
                            <p className="text-[8px] text-gray-600">
                                Your submission will be reviewed by our moderators.
                                Please ensure all required nutritional information is accurate.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Proposal Form */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5">
                    <h3 className="text-xs font-medium text-gray-900 mb-1">New Food Item Details</h3>

                    {/* Basic Info */}
                    <div className="space-y-1.5 mb-2">
                        <div>
                            <label className={theme.components.input.label}>Food Name</label>
                            <input type="text" className={theme.components.input.base} value="Teff" />
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                            <div>
                                <label className={theme.components.input.label}>Category</label>
                                <select className={theme.components.input.base}>
                                    <option selected>Grains</option>
                                    <option>Vegetables</option>
                                    <option>Fruits</option>
                                    <option>Dairy</option>
                                    <option>Proteins</option>
                                </select>
                            </div>
                            <div>
                                <label className={theme.components.input.label}>Serving Size</label>
                                <div className="flex">
                                    <input type="text" className={`${theme.components.input.base} rounded-r-none`} value="100" />
                                    <select className={`${theme.components.input.base} rounded-l-none border-l-0 w-16`}>
                                        <option selected>g</option>
                                        <option>ml</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className={theme.components.input.label}>Description</label>
                            <textarea
                                className={theme.components.input.base}
                                rows={2}
                                value="Teff is a nutrient-dense ancient grain from Ethiopia."
                            ></textarea>
                        </div>
                    </div>

                    {/* Mandatory Nutrition Info */}
                    <div className="mb-2">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="text-[10px] font-medium text-gray-800">Required Nutrition Information</h4>
                            <span className="text-[8px] text-red-600">* Required</span>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                            <div>
                                <label className={theme.components.input.label}>
                                    Calories (kcal) <span className="text-red-600">*</span>
                                </label>
                                <input type="text" className={theme.components.input.base} value="101" />
                            </div>
                            <div>
                                <label className={theme.components.input.label}>
                                    Protein (g) <span className="text-red-600">*</span>
                                </label>
                                <input type="text" className={theme.components.input.base} value="3.9" />
                            </div>
                            <div>
                                <label className={theme.components.input.label}>
                                    Carbs (g) <span className="text-red-600">*</span>
                                </label>
                                <input type="text" className={theme.components.input.base} value="20" />
                            </div>
                            <div>
                                <label className={theme.components.input.label}>
                                    Fat (g) <span className="text-red-600">*</span>
                                </label>
                                <input type="text" className={theme.components.input.base} value="0.6" />
                            </div>
                        </div>
                    </div>

                    {/* Optional Nutrition Info */}
                    <div className="mb-2">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="text-[10px] font-medium text-gray-800">Optional Micronutrients</h4>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                            <div>
                                <label className={theme.components.input.label}>Iron (mg)</label>
                                <input type="text" className={theme.components.input.base} value="2.3" />
                            </div>
                            <div>
                                <label className={theme.components.input.label}>Calcium (mg)</label>
                                <input type="text" className={theme.components.input.base} value="11" />
                            </div>
                        </div>
                    </div>

                    {/* Dietary Tags */}
                    <div className="mb-2">
                        <h4 className="text-[10px] font-medium text-gray-800 mb-1">Dietary Tags</h4>

                        <div className="flex flex-wrap gap-1.5">
                            {["Vegan", "Gluten-Free", "High Fiber", "Whole Grain"].map((tag, index) => (
                                <label key={index} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-2.5 w-2.5 text-blue-600 border-gray-300 rounded mr-0.5"
                                        checked={true}
                                    />
                                    <span className="text-[8px]">{tag}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Form Controls */}
                    <div className="flex justify-between items-center pt-1 mt-1 border-t">
                        <div className="text-[8px] text-gray-500">
                            <span className="text-red-600">*</span> Required fields
                        </div>
                        <div className="flex gap-1.5">
                            <button className="px-2 py-1 border border-gray-300 rounded text-[8px] text-gray-700 bg-white">
                                Cancel
                            </button>
                            <button className="px-2 py-1 border border-transparent rounded text-[8px] text-white bg-blue-600">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItemProposal; 