import React from 'react';

const MealPlanner = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Weekly Meal Planner</h1>
                    <span className="bg-purple-100 text-purple-800 text-[8px] px-1 py-0.5 rounded-full">
                        Celiac
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Week Navigation */}
                <div className="flex justify-between items-center mb-1.5">
                    <button className="text-[8px] text-gray-600">← Previous Week</button>
                    <div className="text-[10px] font-medium">May 20 - May 26, 2024</div>
                    <button className="text-[8px] text-gray-600">Next Week →</button>
                </div>

                {/* Weekly Calendar */}
                <div className="border rounded overflow-hidden mb-1.5">
                    <table className="w-full text-[8px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-0.5 w-[14%]">Monday</th>
                                <th className="p-0.5 w-[14%]">Tuesday</th>
                                <th className="p-0.5 w-[14%]">Wednesday</th>
                                <th className="p-0.5 w-[14%]">Thursday</th>
                                <th className="p-0.5 w-[14%]">Friday</th>
                                <th className="p-0.5 w-[14%]">Saturday</th>
                                <th className="p-0.5 w-[14%]">Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Breakfast Row */}
                            <tr className="border-t">
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Breakfast</div>
                                    <div className="text-[7px]">Yogurt with fruit</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Breakfast</div>
                                    <div className="text-[7px]">Gluten-free oatmeal</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Breakfast</div>
                                    <div className="text-[7px]">Fruit smoothie</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Breakfast</div>
                                    <div className="text-[7px]">Gluten-free toast</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Breakfast</div>
                                    <div className="text-[7px]">Yogurt with nuts</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Breakfast</div>
                                    <div className="text-[7px]">Gluten-free pancakes</div>
                                </td>
                                <td className="p-0.5 h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Breakfast</div>
                                    <div className="text-[7px]">Fruit salad</div>
                                </td>
                            </tr>
                            {/* Lunch Row */}
                            <tr className="border-t">
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Lunch</div>
                                    <div className="text-[7px]">Quinoa salad</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Lunch</div>
                                    <div className="text-[7px]">Vegetable soup</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top bg-blue-50">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Lunch</div>
                                    <div className="text-[7px] font-medium text-blue-600">Gluten-Free Flatbread</div>
                                    <div className="text-[6px] text-gray-500">with hummus</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Lunch</div>
                                    <div className="text-[7px]">Rice bowl</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Lunch</div>
                                    <div className="text-[7px]">Corn tortilla wrap</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Lunch</div>
                                    <div className="text-[7px]">Lentil soup</div>
                                </td>
                                <td className="p-0.5 h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Lunch</div>
                                    <div className="text-[7px]">Potato salad</div>
                                </td>
                            </tr>
                            {/* Dinner Row */}
                            <tr className="border-t">
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Dinner</div>
                                    <div className="text-[7px]">Grilled chicken</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Dinner</div>
                                    <div className="text-[7px]">Fish with rice</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Dinner</div>
                                    <div className="text-[7px]">Stuffed peppers</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Dinner</div>
                                    <div className="text-[7px]">Baked salmon</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top bg-blue-50">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Dinner</div>
                                    <div className="text-[7px] font-medium text-blue-600">Gluten-Free Flatbread</div>
                                    <div className="text-[6px] text-gray-500">with grilled vegetables</div>
                                </td>
                                <td className="p-0.5 border-r h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Dinner</div>
                                    <div className="text-[7px]">Stir-fry with rice</div>
                                </td>
                                <td className="p-0.5 h-8 align-top">
                                    <div className="font-medium text-[6px] text-gray-500 mb-0.5">Dinner</div>
                                    <div className="text-[7px]">Roast chicken</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Add Recipe to Plan */}
                <div className="border rounded p-1.5 bg-gray-50 mb-1.5">
                    <div className="text-[10px] font-medium mb-0.5">Add Recipe to Meal Plan</div>
                    <div className="flex gap-1.5 mb-1">
                        <select className="border rounded p-0.5 text-[8px] flex-grow">
                            <option>Gluten-Free Flatbread</option>
                            <option>Quinoa Salad</option>
                            <option>Vegetable Soup</option>
                            <option>Rice Bowl with Vegetables</option>
                        </select>
                        <select className="border rounded p-0.5 text-[8px] w-20">
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Snack</option>
                        </select>
                    </div>
                    <div className="flex gap-1.5 mb-1">
                        <select className="border rounded p-0.5 text-[8px] flex-grow">
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option selected>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </select>
                        <button className="bg-blue-600 text-white px-2 py-0.5 rounded text-[8px]">Add to Plan</button>
                    </div>
                </div>

                {/* Nutrition Summary */}
                <div className="border rounded p-1.5">
                    <div className="text-[10px] font-medium mb-0.5">Weekly Nutrition Summary</div>
                    <div className="grid grid-cols-4 gap-1.5">
                        <div className="text-center">
                            <div className="text-[8px] text-gray-600">Avg. Calories</div>
                            <div className="text-[10px] font-medium">1850</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[8px] text-gray-600">Protein</div>
                            <div className="text-[10px] font-medium">75g</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[8px] text-gray-600">Carbs</div>
                            <div className="text-[10px] font-medium">220g</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[8px] text-gray-600">Fat</div>
                            <div className="text-[10px] font-medium">65g</div>
                        </div>
                    </div>
                    <div className="mt-1 text-[8px] text-center text-green-600">
                        All meals are gluten-free and suitable for celiac diet
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealPlanner; 