import React from 'react';
import theme from '../../../styles/theme';

// Food search mockup component for Use Case 8
const FoodSearch = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* Header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Food Database</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Student
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={theme.components.layout.content}>
                {/* Search */}
                <div className="mb-2">
                    <div className="relative mb-1.5">
                        <input
                            type="text"
                            className={`${theme.components.input.base} pl-6`}
                            placeholder="Search for a food item..."
                            value="Quinoa"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-1.5 pointer-events-none">
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[8px] text-gray-500">500+ food items</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-[8px] text-gray-600">Sort by:</span>
                            <select className="text-[8px] border rounded py-0.5 px-1">
                                <option>Relevance</option>
                                <option>Calories</option>
                                <option selected>Protein</option>
                                <option>Carbs</option>
                                <option>Fat</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Search Results */}
                <div className="space-y-1.5">
                    {/* Exact Match */}
                    <div className="bg-white border border-gray-200 rounded-lg p-1.5">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-xs font-medium text-gray-900">Quinoa</h3>
                                <p className="text-[8px] text-gray-500">100g serving</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium text-[8px]">8.5</span>
                                </div>
                                <span className="text-[6px] text-gray-500">Score</span>
                            </div>
                        </div>

                        <div className="mt-1 grid grid-cols-4 gap-0.5">
                            <div className="bg-gray-50 rounded p-0.5 text-center">
                                <span className="text-[6px] text-gray-500">Calories</span>
                                <p className="text-[8px] font-medium">120 kcal</p>
                            </div>
                            <div className="bg-gray-50 rounded p-0.5 text-center">
                                <span className="text-[6px] text-gray-500">Protein</span>
                                <p className="text-[8px] font-medium">4g</p>
                            </div>
                            <div className="bg-gray-50 rounded p-0.5 text-center">
                                <span className="text-[6px] text-gray-500">Carbs</span>
                                <p className="text-[8px] font-medium">21g</p>
                            </div>
                            <div className="bg-gray-50 rounded p-0.5 text-center">
                                <span className="text-[6px] text-gray-500">Fat</span>
                                <p className="text-[8px] font-medium">1.9g</p>
                            </div>
                        </div>
                    </div>

                    {/* Other Results */}
                    {[
                        { name: "Chicken Breast", protein: "31g", carbs: "0g", fat: "3.6g", calories: "165", score: "9.2" },
                        { name: "Greek Yogurt", protein: "10g", carbs: "3.6g", fat: "0.4g", calories: "59", score: "8.0" },
                        { name: "Lentils", protein: "9g", carbs: "20g", fat: "0.4g", calories: "116", score: "8.7" },
                    ].map((food, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-1.5">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-xs font-medium text-gray-900">{food.name}</h3>
                                    <p className="text-[8px] text-gray-500">100g serving</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium text-[8px]">{food.score}</span>
                                    </div>
                                    <span className="text-[6px] text-gray-500">Score</span>
                                </div>
                            </div>

                            <div className="mt-1 grid grid-cols-4 gap-0.5">
                                <div className="bg-gray-50 rounded p-0.5 text-center">
                                    <span className="text-[6px] text-gray-500">Calories</span>
                                    <p className="text-[8px] font-medium">{food.calories} kcal</p>
                                </div>
                                <div className="bg-gray-50 rounded p-0.5 text-center">
                                    <span className="text-[6px] text-gray-500">Protein</span>
                                    <p className="text-[8px] font-medium">{food.protein}</p>
                                </div>
                                <div className="bg-gray-50 rounded p-0.5 text-center">
                                    <span className="text-[6px] text-gray-500">Carbs</span>
                                    <p className="text-[8px] font-medium">{food.carbs}</p>
                                </div>
                                <div className="bg-gray-50 rounded p-0.5 text-center">
                                    <span className="text-[6px] text-gray-500">Fat</span>
                                    <p className="text-[8px] font-medium">{food.fat}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Didn't find item message */}
                <div className="mt-2 bg-gray-50 border border-gray-200 rounded-lg p-1.5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xs font-medium text-gray-800">Can't find what you're looking for?</h3>
                            <p className="text-[8px] text-gray-600">Add a new food item to our database.</p>
                        </div>
                        <button className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[8px]">
                            + Add New
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodSearch; 