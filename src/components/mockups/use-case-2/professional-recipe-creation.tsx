import React from 'react';

const ProfessionalRecipeCreation = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Create Recipe</h1>
                    <span className="bg-teal-100 text-teal-800 text-[8px] px-1 py-0.5 rounded-full">
                        Dietician
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Recipe Basic Info */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Recipe Name</label>
                    <input
                        type="text"
                        className="w-full border rounded p-1 text-[10px]"
                        placeholder="Enter recipe name"
                    />
                </div>

                {/* Ingredients Section */}
                <div className="mb-1.5">
                    <div className="flex justify-between items-center mb-0.5">
                        <label className="block text-[10px] font-medium">Ingredients</label>
                        <button className="text-[8px] bg-blue-50 text-blue-600 px-1 py-0.5 rounded">+ Add</button>
                    </div>

                    <div className="border rounded overflow-hidden">
                        <table className="w-full text-[8px]">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left p-0.5">Ingredient</th>
                                    <th className="text-left p-0.5">Amount</th>
                                    <th className="text-left p-0.5">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-0.5">Eggs</td>
                                    <td className="p-0.5">2 large</td>
                                    <td className="p-0.5">3 TL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Instructions */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Preparation Steps</label>
                    <textarea
                        className="w-full border rounded p-1 h-8 text-[10px]"
                        placeholder="Enter preparation steps"
                    />
                </div>

                {/* Tags */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Tags</label>
                    <div className="flex flex-wrap gap-1">
                        <span className="bg-green-50 text-green-700 px-1 py-0.5 rounded text-[8px]">
                            budget-friendly
                        </span>
                        <span className="bg-teal-50 text-teal-700 px-1 py-0.5 rounded text-[8px]">
                            nutritionist-approved
                        </span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-1.5">
                    <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px]">Post</button>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalRecipeCreation; 