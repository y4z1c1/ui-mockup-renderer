import React from 'react';

const SavedMealPlans = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Saved Meal Plans</h1>
                    <span className="bg-green-100 text-green-800 text-[8px] px-1 py-0.5 rounded-full">
                        Vegan
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Search and Filter */}
                <div className="mb-1.5 flex gap-1.5">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            className="w-full border rounded p-1 text-[10px] pr-6"
                            placeholder="Search saved plans..."
                        />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[8px] text-gray-500">
                            🔍
                        </button>
                    </div>
                    <select className="border rounded p-1 text-[10px] w-24">
                        <option>All Plans</option>
                        <option selected>Vegan</option>
                        <option>High Protein</option>
                        <option>Budget</option>
                    </select>
                </div>

                {/* Current Plan */}
                <div className="mb-1.5">
                    <div className="text-[10px] font-medium mb-0.5">Current Plan</div>
                    <div className="border rounded overflow-hidden bg-green-50 border-green-200">
                        <div className="p-1.5 flex justify-between items-center">
                            <div>
                                <div className="text-[10px] font-medium">High Protein Vegan Plan</div>
                                <div className="text-[8px] text-gray-600">Created: May 15, 2024</div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-[8px] text-gray-600">Budget: 500 TL/week</div>
                                <div className="text-[8px] text-green-600">Active</div>
                            </div>
                        </div>
                        <div className="bg-white p-1 border-t">
                            <div className="flex justify-between text-[8px] mb-0.5">
                                <span>2800 cal/day</span>
                                <span>140g protein/day</span>
                                <span>Vegan</span>
                            </div>
                            <div className="flex gap-1">
                                <button className="bg-blue-600 text-white px-1 py-0.5 rounded text-[8px] flex-grow">View Plan</button>
                                <button className="bg-gray-200 text-gray-700 px-1 py-0.5 rounded text-[8px]">Edit</button>
                                <button className="bg-blue-600 text-white px-1 py-0.5 rounded text-[8px]">Share</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Previous Plans */}
                <div className="mb-1.5">
                    <div className="text-[10px] font-medium mb-0.5">Previous Plans</div>

                    {/* Plan 1 */}
                    <div className="border rounded overflow-hidden mb-1.5">
                        <div className="p-1.5 flex justify-between items-center">
                            <div>
                                <div className="text-[10px] font-medium">Basic Vegan Plan</div>
                                <div className="text-[8px] text-gray-600">Created: April 20, 2024</div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-[8px] text-gray-600">Budget: 400 TL/week</div>
                                <div className="text-[8px] text-gray-500">Inactive</div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-1 border-t">
                            <div className="flex justify-between text-[8px] mb-0.5">
                                <span>2500 cal/day</span>
                                <span>100g protein/day</span>
                                <span>Vegan</span>
                            </div>
                            <div className="flex gap-1">
                                <button className="bg-blue-600 text-white px-1 py-0.5 rounded text-[8px] flex-grow">View Plan</button>
                                <button className="bg-gray-200 text-gray-700 px-1 py-0.5 rounded text-[8px]">Edit</button>
                                <button className="bg-green-600 text-white px-1 py-0.5 rounded text-[8px]">Activate</button>
                            </div>
                        </div>
                    </div>

                    {/* Plan 2 */}
                    <div className="border rounded overflow-hidden mb-1.5">
                        <div className="p-1.5 flex justify-between items-center">
                            <div>
                                <div className="text-[10px] font-medium">Cutting Vegan Plan</div>
                                <div className="text-[8px] text-gray-600">Created: March 5, 2024</div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-[8px] text-gray-600">Budget: 450 TL/week</div>
                                <div className="text-[8px] text-gray-500">Inactive</div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-1 border-t">
                            <div className="flex justify-between text-[8px] mb-0.5">
                                <span>2200 cal/day</span>
                                <span>130g protein/day</span>
                                <span>Vegan</span>
                            </div>
                            <div className="flex gap-1">
                                <button className="bg-blue-600 text-white px-1 py-0.5 rounded text-[8px] flex-grow">View Plan</button>
                                <button className="bg-gray-200 text-gray-700 px-1 py-0.5 rounded text-[8px]">Edit</button>
                                <button className="bg-green-600 text-white px-1 py-0.5 rounded text-[8px]">Activate</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Create New Plan */}
                <div className="border rounded p-2 bg-gray-50 flex flex-col items-center justify-center">
                    <div className="text-[10px] font-medium mb-0.5">Create a New Meal Plan</div>
                    <div className="text-[8px] text-gray-600 mb-1 text-center">
                        Set up a new meal plan with your specific dietary preferences and budget
                    </div>
                    <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px]">
                        + New Meal Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SavedMealPlans; 