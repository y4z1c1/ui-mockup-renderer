import React from 'react';
import theme from '../../../styles/theme';

// Food detail mockup component for Use Case 8
const FoodDetail = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* Header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Food Details</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Student
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={theme.components.layout.content}>
                {/* Food Header */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-2">
                    <div className="flex justify-between mb-1">
                        <div>
                            <h2 className="text-sm font-medium text-gray-900">Quinoa</h2>
                            <p className="text-[8px] text-gray-500">Whole grain</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-medium text-[8px]">8.5</span>
                            </div>
                            <span className="text-[6px] text-gray-500">Score</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-1">
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                            Vegan
                        </span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                            Gluten-Free
                        </span>
                    </div>

                    <p className="text-[8px] text-gray-700 mb-1">
                        Quinoa is a nutrient-rich pseudocereal that has been consumed for thousands of years. High in protein, fiber, and various vitamins and minerals.
                    </p>

                    <div className="flex justify-between text-[8px] text-gray-500">
                        <span>Serving size: 100g</span>
                        <span>Price: 5-8 TL/100g</span>
                    </div>
                </div>

                {/* Nutrition Facts */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                    {/* Macronutrients */}
                    <div className="bg-white border border-gray-200 rounded-lg p-1.5">
                        <h3 className="text-xs font-medium text-gray-900 mb-1">Macronutrients</h3>

                        <div className="space-y-1">
                            <div>
                                <div className="flex justify-between text-[8px]">
                                    <span className="font-medium">Calories</span>
                                    <span>120 kcal</span>
                                </div>
                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                    <div className="w-5/12 h-1 bg-yellow-500 rounded-full"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[8px]">
                                    <span className="font-medium">Protein</span>
                                    <span>4g</span>
                                </div>
                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                    <div className="w-4/12 h-1 bg-blue-600 rounded-full"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[8px]">
                                    <span className="font-medium">Carbs</span>
                                    <span>21g</span>
                                </div>
                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                    <div className="w-7/12 h-1 bg-green-600 rounded-full"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[8px]">
                                    <span className="font-medium">Fat</span>
                                    <span>1.9g</span>
                                </div>
                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                    <div className="w-2/12 h-1 bg-red-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Micronutrients */}
                    <div className="bg-white border border-gray-200 rounded-lg p-1.5">
                        <h3 className="text-xs font-medium text-gray-900 mb-1">Micronutrients</h3>

                        <div className="space-y-1">
                            {[
                                { name: "Iron", value: "1.5mg", percent: "8%" },
                                { name: "Magnesium", value: "64mg", percent: "15%" },
                                { name: "Phosphorus", value: "152mg", percent: "15%" },
                                { name: "Zinc", value: "1.1mg", percent: "10%" },
                            ].map((nutrient, index) => (
                                <div key={index} className="flex justify-between text-[8px]">
                                    <span>{nutrient.name}</span>
                                    <div className="flex">
                                        <span className="mr-1">{nutrient.value}</span>
                                        <span className="text-gray-500">{nutrient.percent}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Compare Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5 mb-2">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xs font-medium text-gray-800">Compare with similar foods</h3>
                            <p className="text-[8px] text-gray-600">See how Quinoa compares with other grains</p>
                        </div>
                        <button className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[8px]">
                            Compare
                        </button>
                    </div>
                </div>

                {/* Not Found Notice */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5">
                    <div className="flex items-start">
                        <svg className="w-3 h-3 text-gray-600 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <div>
                            <h3 className="text-xs font-medium text-gray-800">Looking for Teff?</h3>
                            <p className="text-[8px] text-gray-600">
                                We couldn't find Teff in our database. Would you like to add it?
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-1">
                        <button className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[8px]">
                            Add New Food
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail; 