import React from 'react';

const ShareMealPlan = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Share Meal Plan</h1>
                    <span className="bg-green-100 text-green-800 text-[8px] px-1 py-0.5 rounded-full">
                        Vegan
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Plan Preview */}
                <div className="mb-1.5 border rounded overflow-hidden">
                    <div className="bg-gray-50 p-1 border-b">
                        <div className="text-[10px] font-medium">High Protein Vegan Plan</div>
                    </div>
                    <div className="p-1.5">
                        <div className="flex justify-between text-[8px] mb-1">
                            <span>2800 cal/day</span>
                            <span>140g protein/day</span>
                            <span>Budget: 500 TL/week</span>
                        </div>
                        <div className="text-[8px] text-gray-600 mb-1">
                            A high-protein vegan meal plan designed for muscle gain with a calorie surplus. All meals are budget-friendly and nutrient-dense.
                        </div>
                        <div className="flex flex-wrap gap-1 mb-1">
                            <span className="bg-green-100 text-green-800 px-1 py-0.5 rounded text-[8px]">Vegan</span>
                            <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-[8px]">High Protein</span>
                            <span className="bg-yellow-100 text-yellow-800 px-1 py-0.5 rounded text-[8px]">Budget</span>
                            <span className="bg-purple-100 text-purple-800 px-1 py-0.5 rounded text-[8px]">Muscle Gain</span>
                        </div>
                        <div className="border-t pt-1 text-[8px] text-gray-600">
                            Sample meals: Tofu Scramble, Lentil and Quinoa Power Bowl, Protein Smoothie, Seitan Stir-Fry
                        </div>
                    </div>
                </div>

                {/* Share Options */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Share To</label>
                    <div className="grid grid-cols-2 gap-1.5">
                        <label className="flex items-center border rounded p-1 bg-blue-50 border-blue-300">
                            <input type="radio" name="share-option" className="mr-1" checked />
                            <div>
                                <div className="text-[10px] font-medium">Forum</div>
                                <div className="text-[8px] text-gray-600">Share with all users</div>
                            </div>
                        </label>
                        <label className="flex items-center border rounded p-1">
                            <input type="radio" name="share-option" className="mr-1" />
                            <div>
                                <div className="text-[10px] font-medium">Friends</div>
                                <div className="text-[8px] text-gray-600">Share with friends only</div>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Post Title */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Post Title</label>
                    <input
                        type="text"
                        className="w-full border rounded p-1 text-[10px]"
                        value="My High Protein Vegan Meal Plan for Muscle Gain"
                    />
                </div>

                {/* Post Description */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Description</label>
                    <textarea
                        className="w-full border rounded p-1 text-[10px]"
                        rows={3}
                        value="Hey everyone! I've been following this high-protein vegan meal plan for the past month and have seen great results in my muscle gain journey. It's budget-friendly (around 500 TL/week) and provides 140g of protein daily with a calorie surplus. Perfect for fellow vegans who are into fitness but on a tight budget. Let me know what you think!"
                    ></textarea>
                </div>

                {/* Tags */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Tags</label>
                    <div className="flex flex-wrap gap-1 mb-0.5">
                        <span className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-[8px] flex items-center">
                            Vegan
                            <button className="ml-0.5 text-gray-500">×</button>
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-[8px] flex items-center">
                            HighProtein
                            <button className="ml-0.5 text-gray-500">×</button>
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-[8px] flex items-center">
                            Budget
                            <button className="ml-0.5 text-gray-500">×</button>
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-[8px] flex items-center">
                            MuscleGain
                            <button className="ml-0.5 text-gray-500">×</button>
                        </span>
                        <input
                            type="text"
                            className="border rounded p-0.5 text-[8px] w-20"
                            placeholder="Add tag..."
                        />
                    </div>
                    <div className="text-[8px] text-gray-600">
                        Add relevant tags to help others find your meal plan
                    </div>
                </div>

                {/* Privacy Options */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Privacy Options</label>
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-1" checked />
                        <div className="text-[8px]">Allow others to duplicate and modify this meal plan</div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-1.5">
                    <button className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-[8px]">Cancel</button>
                    <button className="bg-blue-600 text-white px-2 py-0.5 rounded text-[8px]">Share Plan</button>
                </div>
            </div>
        </div>
    );
};

export default ShareMealPlan; 