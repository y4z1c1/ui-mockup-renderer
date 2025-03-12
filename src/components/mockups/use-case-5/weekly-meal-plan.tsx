import React from 'react';

const WeeklyMealPlan = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Weekly Meal Plan</h1>
                    <span className="bg-green-100 text-green-800 text-[8px] px-1 py-0.5 rounded-full">
                        Vegan
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Plan Summary */}
                <div className="mb-1.5 p-1.5 border rounded bg-gray-50">
                    <div className="flex justify-between items-center mb-1">
                        <div className="text-[10px] font-medium">High Protein Vegan Plan</div>
                        <div className="text-[8px] text-gray-600">Budget: 500 TL/week</div>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                        <div>
                            <div className="text-[8px] text-gray-600">Daily Calories</div>
                            <div className="text-[10px] font-medium">2800</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-600">Protein</div>
                            <div className="text-[10px] font-medium">140g</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-600">Carbs</div>
                            <div className="text-[10px] font-medium">350g</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-600">Fat</div>
                            <div className="text-[10px] font-medium">62g</div>
                        </div>
                    </div>
                </div>

                {/* Day Navigation */}
                <div className="flex mb-1.5 border rounded overflow-hidden">
                    <button className="flex-1 py-0.5 text-[8px] bg-gray-50">Mon</button>
                    <button className="flex-1 py-0.5 text-[8px] bg-green-50 border-b-2 border-green-500 font-medium">Tue</button>
                    <button className="flex-1 py-0.5 text-[8px] bg-gray-50">Wed</button>
                    <button className="flex-1 py-0.5 text-[8px] bg-gray-50">Thu</button>
                    <button className="flex-1 py-0.5 text-[8px] bg-gray-50">Fri</button>
                    <button className="flex-1 py-0.5 text-[8px] bg-gray-50">Sat</button>
                    <button className="flex-1 py-0.5 text-[8px] bg-gray-50">Sun</button>
                </div>

                {/* Meals for Selected Day */}
                <div className="mb-1.5">
                    <div className="text-[10px] font-medium mb-0.5">Tuesday Meals</div>

                    {/* Breakfast */}
                    <div className="border rounded mb-1.5 overflow-hidden">
                        <div className="bg-gray-50 p-0.5 border-b flex justify-between items-center">
                            <div className="text-[8px] font-medium">Breakfast (7:00 AM)</div>
                            <div className="text-[8px] text-gray-600">650 cal | 30g protein</div>
                        </div>
                        <div className="p-1">
                            <div className="text-[10px] font-medium mb-0.5">Tofu Scramble with Vegetables</div>
                            <div className="text-[8px] text-gray-600 mb-0.5">
                                200g firm tofu, 1 bell pepper, 1/2 onion, 2 tbsp nutritional yeast, spices
                            </div>
                            <div className="flex justify-between text-[8px]">
                                <span className="text-green-600">Vegan</span>
                                <span className="text-gray-600">Est. Cost: 25 TL</span>
                            </div>
                        </div>
                    </div>

                    {/* Lunch */}
                    <div className="border rounded mb-1.5 overflow-hidden">
                        <div className="bg-gray-50 p-0.5 border-b flex justify-between items-center">
                            <div className="text-[8px] font-medium">Lunch (12:00 PM)</div>
                            <div className="text-[8px] text-gray-600">750 cal | 35g protein</div>
                        </div>
                        <div className="p-1">
                            <div className="text-[10px] font-medium mb-0.5">Lentil and Quinoa Power Bowl</div>
                            <div className="text-[8px] text-gray-600 mb-0.5">
                                100g lentils, 75g quinoa, mixed vegetables, tahini dressing
                            </div>
                            <div className="flex justify-between text-[8px]">
                                <span className="text-green-600">Vegan</span>
                                <span className="text-gray-600">Est. Cost: 20 TL</span>
                            </div>
                        </div>
                    </div>

                    {/* Snack */}
                    <div className="border rounded mb-1.5 overflow-hidden">
                        <div className="bg-gray-50 p-0.5 border-b flex justify-between items-center">
                            <div className="text-[8px] font-medium">Snack (3:30 PM)</div>
                            <div className="text-[8px] text-gray-600">400 cal | 20g protein</div>
                        </div>
                        <div className="p-1">
                            <div className="text-[10px] font-medium mb-0.5">Protein Smoothie</div>
                            <div className="text-[8px] text-gray-600 mb-0.5">
                                1 banana, 30g vegan protein powder, 1 tbsp peanut butter, almond milk
                            </div>
                            <div className="flex justify-between text-[8px]">
                                <span className="text-green-600">Vegan</span>
                                <span className="text-gray-600">Est. Cost: 15 TL</span>
                            </div>
                        </div>
                    </div>

                    {/* Dinner */}
                    <div className="border rounded mb-1.5 overflow-hidden">
                        <div className="bg-gray-50 p-0.5 border-b flex justify-between items-center">
                            <div className="text-[8px] font-medium">Dinner (7:00 PM)</div>
                            <div className="text-[8px] text-gray-600">1000 cal | 55g protein</div>
                        </div>
                        <div className="p-1">
                            <div className="text-[10px] font-medium mb-0.5">Seitan Stir-Fry with Brown Rice</div>
                            <div className="text-[8px] text-gray-600 mb-0.5">
                                150g seitan, broccoli, carrots, bell peppers, 100g brown rice, soy sauce
                            </div>
                            <div className="flex justify-between text-[8px]">
                                <span className="text-green-600">Vegan</span>
                                <span className="text-gray-600">Est. Cost: 30 TL</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Daily Summary */}
                <div className="border rounded p-1.5 mb-1.5">
                    <div className="text-[10px] font-medium mb-0.5">Daily Summary</div>
                    <div className="grid grid-cols-2 gap-1.5">
                        <div>
                            <div className="text-[8px] text-gray-600">Total Calories</div>
                            <div className="text-[10px] font-medium">2800 cal</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-600">Total Protein</div>
                            <div className="text-[10px] font-medium">140g</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-600">Total Cost</div>
                            <div className="text-[10px] font-medium">90 TL</div>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-600">Weekly Budget Used</div>
                            <div className="text-[10px] font-medium">90/500 TL (18%)</div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between gap-1.5">
                    <button className="bg-blue-600 text-white px-2 py-0.5 rounded text-[8px]">
                        <span className="mr-0.5">📋</span> Shopping List
                    </button>
                    <div className="flex gap-1.5">
                        <button className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-[8px]">Edit Plan</button>
                        <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px]">Save Plan</button>
                        <button className="bg-blue-600 text-white px-2 py-0.5 rounded text-[8px]">Share Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyMealPlan; 