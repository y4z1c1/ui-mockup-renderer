import React from 'react';
import theme from '../../../styles/theme';

// Food comparison mockup component for Use Case 8
const FoodCompare = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* Header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Food Comparison</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Student
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={theme.components.layout.content}>
                {/* Filter Controls */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-2">
                    <div className="flex flex-wrap justify-between items-center mb-1">
                        <h3 className="text-xs font-medium text-gray-900">Compare Foods</h3>

                        <div className="flex items-center space-x-1">
                            <span className="text-[8px] text-gray-600">Sort by:</span>
                            <select className="text-[8px] border rounded py-0.5 px-1">
                                <option>Calories</option>
                                <option selected>Protein</option>
                                <option>Carbs</option>
                                <option>Fat</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-blue-100 text-blue-800">
                            Grains
                        </span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                            High Protein
                        </span>
                    </div>
                </div>

                {/* Comparison Graph - Protein Content */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-2">
                    <h3 className="text-xs font-medium text-gray-900 mb-1">Protein Content (per 100g)</h3>

                    <div className="space-y-1.5">
                        {[
                            { name: "Chicken Breast", value: "31g", percent: "100%" },
                            { name: "Greek Yogurt", value: "10g", percent: "32%" },
                            { name: "Lentils", value: "9g", percent: "29%" },
                            { name: "Quinoa", value: "4g", percent: "13%" },
                            { name: "Brown Rice", value: "2.6g", percent: "8%" },
                        ].map((food, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-0.5">
                                    <div className="flex items-center">
                                        <span className="text-[8px] font-medium w-20 truncate">{food.name}</span>
                                        <span className="text-[8px] ml-1">{food.value}</span>
                                    </div>
                                    <span className="text-[8px] text-gray-500">{food.percent}</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                    <div
                                        className={`h-2 rounded-full ${food.name === "Quinoa" ? "bg-green-600" : "bg-blue-600"}`}
                                        style={{ width: food.percent }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Comparison Table */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5">
                    <h3 className="text-xs font-medium text-gray-900 mb-1">Nutritional Comparison</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-[8px]">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left p-1 border-b">Food</th>
                                    <th className="text-center p-1 border-b">Calories</th>
                                    <th className="text-center p-1 border-b bg-blue-50">Protein</th>
                                    <th className="text-center p-1 border-b">Carbs</th>
                                    <th className="text-center p-1 border-b">Fat</th>
                                    <th className="text-center p-1 border-b">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Chicken Breast", calories: "165", protein: "31g", carbs: "0g", fat: "3.6g", score: "9.2" },
                                    { name: "Greek Yogurt", calories: "59", protein: "10g", carbs: "3.6g", fat: "0.4g", score: "8.0" },
                                    { name: "Lentils", calories: "116", protein: "9g", carbs: "20g", fat: "0.4g", score: "8.7" },
                                    { name: "Quinoa", calories: "120", protein: "4g", carbs: "21g", fat: "1.9g", score: "8.5", highlight: true },
                                    { name: "Brown Rice", calories: "112", protein: "2.6g", carbs: "24g", fat: "0.8g", score: "7.8" },
                                ].map((food, index) => (
                                    <tr key={index} className={food.highlight ? "bg-green-50" : index % 2 === 0 ? "bg-gray-50" : ""}>
                                        <td className="text-left p-1 border-b font-medium">{food.name}</td>
                                        <td className="text-center p-1 border-b">{food.calories}</td>
                                        <td className="text-center p-1 border-b bg-blue-50 font-medium">{food.protein}</td>
                                        <td className="text-center p-1 border-b">{food.carbs}</td>
                                        <td className="text-center p-1 border-b">{food.fat}</td>
                                        <td className="text-center p-1 border-b">
                                            <div className="inline-flex items-center justify-center w-4 h-4 bg-green-600 rounded-full text-white">
                                                {food.score}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-1.5">
                        <div className="flex items-center mt-0.5">
                            <span className="text-[8px] text-gray-600">
                                Looking for Teff? <a href="#" className="text-blue-600">Propose a new food item</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCompare; 