import React from 'react';

const FoodDatabaseSearch = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Food Database</h1>
                    <span className="bg-purple-100 text-purple-800 text-[8px] px-1 py-0.5 rounded-full">
                        Celiac
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Search Bar */}
                <div className="mb-1.5">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full border rounded p-1 text-[10px] pr-6"
                            placeholder="Search food items..."
                            value="Chickpea flour blend"
                        />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[8px] text-gray-500">
                            🔍
                        </button>
                    </div>
                </div>

                {/* No Results */}
                <div className="text-center py-3 border rounded bg-gray-50 mb-1.5">
                    <div className="text-[10px] text-gray-600 mb-1">
                        No results found for "Chickpea flour blend"
                    </div>
                    <button className="bg-blue-600 text-white px-2 py-0.5 rounded text-[8px]">
                        + Propose New Food Item
                    </button>
                </div>

                {/* Similar Items */}
                <div className="mb-1.5">
                    <div className="text-[10px] font-medium mb-0.5">Similar Items:</div>
                    <div className="border rounded overflow-hidden">
                        <table className="w-full text-[8px]">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left p-0.5">Food Item</th>
                                    <th className="text-left p-0.5">Nutrition Score</th>
                                    <th className="text-left p-0.5">Dietary Tags</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-0.5">Chickpea Flour</td>
                                    <td className="p-0.5">
                                        <span className="bg-green-100 text-green-800 px-1 rounded-full">B+</span>
                                    </td>
                                    <td className="p-0.5">
                                        <span className="bg-purple-100 text-purple-800 px-0.5 rounded-full text-[6px] mr-0.5">Celiac</span>
                                        <span className="bg-green-100 text-green-800 px-0.5 rounded-full text-[6px]">Vegan</span>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-0.5">Rice Flour</td>
                                    <td className="p-0.5">
                                        <span className="bg-yellow-100 text-yellow-800 px-1 rounded-full">C</span>
                                    </td>
                                    <td className="p-0.5">
                                        <span className="bg-purple-100 text-purple-800 px-0.5 rounded-full text-[6px] mr-0.5">Celiac</span>
                                        <span className="bg-green-100 text-green-800 px-0.5 rounded-full text-[6px]">Vegan</span>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-0.5">Almond Flour</td>
                                    <td className="p-0.5">
                                        <span className="bg-green-100 text-green-800 px-1 rounded-full">A-</span>
                                    </td>
                                    <td className="p-0.5">
                                        <span className="bg-purple-100 text-purple-800 px-0.5 rounded-full text-[6px] mr-0.5">Celiac</span>
                                        <span className="bg-green-100 text-green-800 px-0.5 rounded-full text-[6px]">Vegan</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDatabaseSearch; 