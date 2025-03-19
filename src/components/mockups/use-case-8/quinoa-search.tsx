import React from 'react';

// Quinoa search page - sorted by protein content with emoji photos
const QuinoaSearch = () => {
    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="bg-blue-50 p-2 border-b">
                <div className="flex items-center mb-1">
                    <span className="text-lg mr-1">🔍</span>
                    <input
                        type="text"
                        className="w-full rounded-full border border-gray-300 py-1 px-2 text-sm"
                        placeholder="Search for a food item..."
                        value="Quinoa"
                    />
                </div>

                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">500+ food items</span>
                    <div className="flex items-center">
                        <span className="mr-1">Sorted by:</span>
                        <select className="border rounded px-1 py-0.5 bg-blue-100 text-blue-800 font-medium text-xs">
                            <option>Calories</option>
                            <option selected>Protein</option>
                            <option>Carbs</option>
                            <option>Fat</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Search Results */}
            <div className="p-2 overflow-auto flex-1">
                <h2 className="text-xs font-medium text-gray-700 mb-1">Results for "Quinoa"</h2>

                <div className="space-y-2">
                    {/* Exact Match - Quinoa */}
                    <div className="bg-white border rounded-lg p-2 flex">
                        <div className="flex-shrink-0 text-2xl mr-2">🌾</div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-sm">Quinoa</h3>
                                    <p className="text-xs text-gray-500">Whole grain superfood</p>
                                </div>
                                <div className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    8.5
                                </div>
                            </div>
                            <div className="mt-1 grid grid-cols-4 gap-1 text-xs">
                                <div>
                                    <span className="text-gray-500">Protein</span>
                                    <p className="font-medium">4g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Carbs</span>
                                    <p className="font-medium">21g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Fat</span>
                                    <p className="font-medium">1.9g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Kcal</span>
                                    <p className="font-medium">120</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Protein-sorted results */}
                    <div className="bg-white border rounded-lg p-2 flex">
                        <div className="flex-shrink-0 text-2xl mr-2">🍗</div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-sm">Chicken Breast</h3>
                                    <p className="text-xs text-gray-500">High protein</p>
                                </div>
                                <div className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    9.2
                                </div>
                            </div>
                            <div className="mt-1 grid grid-cols-4 gap-1 text-xs">
                                <div>
                                    <span className="text-gray-500 font-bold">Protein</span>
                                    <p className="font-bold">31g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Carbs</span>
                                    <p className="font-medium">0g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Fat</span>
                                    <p className="font-medium">3.6g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Kcal</span>
                                    <p className="font-medium">165</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg p-2 flex">
                        <div className="flex-shrink-0 text-2xl mr-2">🥛</div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-sm">Greek Yogurt</h3>
                                    <p className="text-xs text-gray-500">Dairy product</p>
                                </div>
                                <div className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    8.0
                                </div>
                            </div>
                            <div className="mt-1 grid grid-cols-4 gap-1 text-xs">
                                <div>
                                    <span className="text-gray-500 font-bold">Protein</span>
                                    <p className="font-bold">10g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Carbs</span>
                                    <p className="font-medium">3.6g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Fat</span>
                                    <p className="font-medium">0.4g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Kcal</span>
                                    <p className="font-medium">59</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg p-2 flex">
                        <div className="flex-shrink-0 text-2xl mr-2">🥗</div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-sm">Lentils</h3>
                                    <p className="text-xs text-gray-500">Plant-based protein</p>
                                </div>
                                <div className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    8.7
                                </div>
                            </div>
                            <div className="mt-1 grid grid-cols-4 gap-1 text-xs">
                                <div>
                                    <span className="text-gray-500 font-bold">Protein</span>
                                    <p className="font-bold">9g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Carbs</span>
                                    <p className="font-medium">20g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Fat</span>
                                    <p className="font-medium">0.4g</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Kcal</span>
                                    <p className="font-medium">116</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Not Found / Add New */}
                <div className="mt-2 bg-gray-50 rounded-lg p-2 text-center">
                    <p className="text-xs mb-1">Can't find what you're looking for?</p>
                    <div className="flex items-center justify-center">
                        <p className="text-xs mr-1">Looking for Teff?</p>
                        <button className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">
                            + Add New
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuinoaSearch; 