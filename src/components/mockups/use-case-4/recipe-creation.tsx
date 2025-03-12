import React from 'react';

const RecipeCreation = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Create Recipe</h1>
                    <span className="bg-purple-100 text-purple-800 text-[8px] px-1 py-0.5 rounded-full">
                        Celiac
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                {/* Recipe Name */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Recipe Name</label>
                    <input
                        type="text"
                        className="w-full border rounded p-1 text-[10px]"
                        value="Gluten-Free Flatbread"
                    />
                </div>

                {/* Description */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Description</label>
                    <textarea
                        className="w-full border rounded p-1 text-[10px]"
                        rows={2}
                        value="A simple and delicious gluten-free flatbread using my newly discovered chickpea flour blend. Perfect for sandwiches or as a side with soups."
                    ></textarea>
                </div>

                {/* Ingredients */}
                <div className="mb-1.5">
                    <div className="flex justify-between items-center mb-0.5">
                        <label className="text-[10px] font-medium">Ingredients</label>
                        <button className="text-blue-600 text-[8px]">+ Add Ingredient</button>
                    </div>
                    <div className="border rounded overflow-hidden">
                        <table className="w-full text-[8px]">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left p-0.5">Ingredient</th>
                                    <th className="text-left p-0.5">Amount</th>
                                    <th className="text-left p-0.5">Est. Cost</th>
                                    <th className="text-left p-0.5">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-0.5">
                                        <div className="flex items-center">
                                            <span>Chickpea flour blend</span>
                                            <span className="ml-0.5 bg-purple-100 text-purple-800 px-0.5 rounded-full text-[6px]">Celiac</span>
                                        </div>
                                    </td>
                                    <td className="p-0.5">2 cups</td>
                                    <td className="p-0.5">15 TL</td>
                                    <td className="p-0.5">
                                        <button className="text-blue-600 mr-1">Edit</button>
                                        <button className="text-red-600">Remove</button>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-0.5">
                                        <div className="flex items-center">
                                            <span>Olive oil</span>
                                            <span className="ml-0.5 bg-purple-100 text-purple-800 px-0.5 rounded-full text-[6px]">Celiac</span>
                                            <span className="ml-0.5 bg-green-100 text-green-800 px-0.5 rounded-full text-[6px]">Vegan</span>
                                        </div>
                                    </td>
                                    <td className="p-0.5">2 tbsp</td>
                                    <td className="p-0.5">3 TL</td>
                                    <td className="p-0.5">
                                        <button className="text-blue-600 mr-1">Edit</button>
                                        <button className="text-red-600">Remove</button>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-0.5">
                                        <div className="flex items-center">
                                            <span>Salt</span>
                                            <span className="ml-0.5 bg-purple-100 text-purple-800 px-0.5 rounded-full text-[6px]">Celiac</span>
                                            <span className="ml-0.5 bg-green-100 text-green-800 px-0.5 rounded-full text-[6px]">Vegan</span>
                                        </div>
                                    </td>
                                    <td className="p-0.5">1 tsp</td>
                                    <td className="p-0.5">0.5 TL</td>
                                    <td className="p-0.5">
                                        <button className="text-blue-600 mr-1">Edit</button>
                                        <button className="text-red-600">Remove</button>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-0.5">
                                        <div className="flex items-center">
                                            <span>Water</span>
                                            <span className="ml-0.5 bg-purple-100 text-purple-800 px-0.5 rounded-full text-[6px]">Celiac</span>
                                            <span className="ml-0.5 bg-green-100 text-green-800 px-0.5 rounded-full text-[6px]">Vegan</span>
                                        </div>
                                    </td>
                                    <td className="p-0.5">1 cup</td>
                                    <td className="p-0.5">0 TL</td>
                                    <td className="p-0.5">
                                        <button className="text-blue-600 mr-1">Edit</button>
                                        <button className="text-red-600">Remove</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className="bg-gray-50 border-t">
                                <tr>
                                    <td className="p-0.5 font-medium" colSpan={2}>Total Estimated Cost:</td>
                                    <td className="p-0.5 font-medium">18.5 TL</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Instructions */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Preparation Steps</label>
                    <textarea
                        className="w-full border rounded p-1 text-[10px]"
                        rows={4}
                        value="1. Mix the chickpea flour blend with salt in a bowl.
2. Add olive oil and mix well.
3. Gradually add water while stirring until you get a smooth batter.
4. Let the batter rest for 10 minutes.
5. Heat a non-stick pan over medium heat.
6. Pour a ladle of batter into the pan and spread it in a circular motion.
7. Cook for 2-3 minutes until bubbles form on the surface.
8. Flip and cook for another 1-2 minutes.
9. Repeat with the remaining batter."
                    ></textarea>
                </div>

                {/* Tags */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Tags</label>
                    <div className="flex flex-wrap gap-1">
                        <span className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-[8px] flex items-center">
                            Recipe
                            <button className="ml-0.5 text-gray-500">×</button>
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-[8px] flex items-center">
                            Gluten-Free
                            <button className="ml-0.5 text-gray-500">×</button>
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-[8px] flex items-center">
                            Flatbread
                            <button className="ml-0.5 text-gray-500">×</button>
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-[8px] flex items-center">
                            Budget-Friendly
                            <button className="ml-0.5 text-gray-500">×</button>
                        </span>
                        <input
                            type="text"
                            className="border rounded p-0.5 text-[8px] w-20"
                            placeholder="Add tag..."
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-1.5">
                    <button className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-[8px]">Save Draft</button>
                    <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px]">Post Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCreation; 