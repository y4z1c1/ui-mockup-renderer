import React from 'react';
import theme from '../../../styles/theme';

// Meal planner with shopping list generation mockup component for Use Case 9
const MealPlanner = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* Header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Weekly Meal Plan</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Sam
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={theme.components.layout.content}>
                {/* Week Selection */}
                <div className="flex justify-between items-center mb-1.5">
                    <button className="text-xs text-gray-500">◀ Prev Week</button>
                    <h2 className="text-xs font-medium">March 18 - 24, 2024</h2>
                    <button className="text-xs text-gray-500">Next Week ▶</button>
                </div>

                {/* Weekly Calendar */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-1.5">
                    <div className="grid grid-cols-7 gap-1.5">
                        {/* Days of the week */}
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <div key={day} className="text-center">
                                <div className="text-[10px] font-medium text-gray-700">{day}</div>
                                <div className="text-[8px] text-gray-500">Mar {18 + ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(day)}</div>
                            </div>
                        ))}

                        {/* Breakfast Row */}
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <div key={`breakfast-${day}`} className="bg-green-50 border border-green-100 rounded p-1 text-[8px]">
                                <div className="font-medium text-[10px] text-green-800">Breakfast</div>
                                <div>Oatmeal & Fruits</div>
                                <div className="text-green-700">~280 cal</div>
                            </div>
                        ))}

                        {/* Lunch Row */}
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <div key={`lunch-${day}`} className="bg-blue-50 border border-blue-100 rounded p-1 text-[8px]">
                                <div className="font-medium text-[10px] text-blue-800">Lunch</div>
                                <div>{day === 'Wed' ? 'Quinoa Salad' : day === 'Sat' ? 'Lentil Soup' : 'Veggie Sandwich'}</div>
                                <div className="text-blue-700">~420 cal</div>
                            </div>
                        ))}

                        {/* Dinner Row */}
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <div key={`dinner-${day}`} className="bg-purple-50 border border-purple-100 rounded p-1 text-[8px]">
                                <div className="font-medium text-[10px] text-purple-800">Dinner</div>
                                <div>{day === 'Fri' ? 'Bean Chili' : day === 'Sun' ? 'Stir Fry' : 'Rice & Beans'}</div>
                                <div className="text-purple-700">~550 cal</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-1.5">
                    <h3 className="text-xs font-medium mb-1">Weekly Nutrition Summary</h3>
                    <div className="grid grid-cols-4 gap-1.5">
                        <div className="text-center">
                            <div className="text-[8px] text-gray-500">Avg. Calories</div>
                            <div className="text-xs font-medium">1,250/day</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[8px] text-gray-500">Protein</div>
                            <div className="text-xs font-medium">65g/day</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[8px] text-gray-500">Carbs</div>
                            <div className="text-xs font-medium">155g/day</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[8px] text-gray-500">Est. Cost</div>
                            <div className="text-xs font-medium">$45/week</div>
                        </div>
                    </div>
                </div>

                {/* Generate Shopping List Action */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-1.5 mb-1.5">
                    <div className="flex items-start">
                        <div className="mr-1.5 text-lg">🛒</div>
                        <div>
                            <h3 className="text-xs font-medium text-blue-800">Generate Shopping List</h3>
                            <p className="text-[8px] text-blue-700 mb-1">
                                Create a list of all ingredients needed for your weekly meal plan.
                                The system will calculate estimated costs.
                            </p>
                            <button className={`${theme.components.button.primary} flex items-center`}>
                                <span className="mr-1">Create Shopping List</span>
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="flex justify-between">
                    <button className="text-xs text-gray-600 flex items-center">
                        <span className="mr-1">📝</span>
                        <span>Edit Meal Plan</span>
                    </button>
                    <button className="text-xs text-gray-600 flex items-center">
                        <span className="mr-1">⭐</span>
                        <span>View Favorites</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MealPlanner; 