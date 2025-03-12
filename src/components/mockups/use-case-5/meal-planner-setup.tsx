import React from 'react';

const MealPlannerSetup = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Meal Planner Setup</h1>
                    <span className="bg-green-100 text-green-800 text-[8px] px-1 py-0.5 rounded-full">
                        Vegan
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* User Profile Summary */}
                <div className="mb-1.5 p-1.5 border rounded bg-gray-50">
                    <div className="flex items-center mb-1">
                        <div className="w-6 h-6 rounded-full bg-gray-300 mr-1.5 flex items-center justify-center text-[8px]">
                            👤
                        </div>
                        <div>
                            <div className="text-[10px] font-medium">Cem</div>
                            <div className="text-[8px] text-gray-600">Fitness Enthusiast</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-center">
                        <div>
                            <div className="text-[8px] text-gray-600">Goal</div>
                            <div className="text-[10px] font-medium">Muscle Gain</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-600">Calories</div>
                            <div className="text-[10px] font-medium">2800/day</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-600">Protein</div>
                            <div className="text-[10px] font-medium">140g/day</div>
                        </div>
                    </div>
                </div>

                {/* Budget Setting */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Weekly Budget (TL)</label>
                    <div className="flex items-center">
                        <input
                            type="range"
                            min="200"
                            max="1000"
                            value="500"
                            className="flex-grow h-1 mr-1.5"
                        />
                        <span className="text-[10px] font-medium bg-gray-100 px-1.5 py-0.5 rounded">500 TL</span>
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-500 mt-0.5">
                        <span>Budget</span>
                        <span>Premium</span>
                    </div>
                </div>

                {/* Dietary Preferences */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Dietary Preferences</label>
                    <div className="grid grid-cols-2 gap-1.5">
                        <label className="flex items-center border rounded p-1 bg-green-50 border-green-300">
                            <input type="checkbox" className="mr-1" checked />
                            <div>
                                <div className="text-[10px] font-medium">Vegan</div>
                                <div className="text-[8px] text-gray-600">No animal products</div>
                            </div>
                        </label>
                        <label className="flex items-center border rounded p-1">
                            <input type="checkbox" className="mr-1" />
                            <div>
                                <div className="text-[10px] font-medium">Gluten-Free</div>
                                <div className="text-[8px] text-gray-600">No wheat products</div>
                            </div>
                        </label>
                        <label className="flex items-center border rounded p-1">
                            <input type="checkbox" className="mr-1" />
                            <div>
                                <div className="text-[10px] font-medium">Low Carb</div>
                                <div className="text-[8px] text-gray-600">Reduced carbohydrates</div>
                            </div>
                        </label>
                        <label className="flex items-center border rounded p-1">
                            <input type="checkbox" className="mr-1" />
                            <div>
                                <div className="text-[10px] font-medium">High Protein</div>
                                <div className="text-[8px] text-gray-600">Extra protein focus</div>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Nutritional Goals */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Nutritional Goals</label>
                    <div className="border rounded p-1.5">
                        <div className="flex justify-between items-center mb-1">
                            <div className="text-[8px]">Calorie Goal</div>
                            <div className="text-[8px] font-medium">2800 cal/day (surplus)</div>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <div className="text-[8px]">Protein Goal</div>
                            <div className="text-[8px] font-medium">140g/day (25%)</div>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <div className="text-[8px]">Carbs Goal</div>
                            <div className="text-[8px] font-medium">350g/day (50%)</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[8px]">Fat Goal</div>
                            <div className="text-[8px] font-medium">62g/day (25%)</div>
                        </div>
                    </div>
                </div>

                {/* Meal Frequency */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Meal Frequency</label>
                    <select className="w-full border rounded p-1 text-[10px]">
                        <option>3 meals per day</option>
                        <option selected>4 meals per day</option>
                        <option>5 meals per day</option>
                        <option>6 meals per day</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-1.5">
                    <button className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-[8px]">Reset</button>
                    <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px]">Generate Meal Plan</button>
                </div>
            </div>
        </div>
    );
};

export default MealPlannerSetup; 