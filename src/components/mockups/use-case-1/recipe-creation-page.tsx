import React from 'react';

const RecipeCreationPage = () => {
  return (
    <div className="flex flex-col bg-white w-full h-full overflow-auto">
      <div className="bg-gray-50 p-1.5 border-b">
        <h1 className="text-sm font-bold text-gray-800">Create New Recipe</h1>
      </div>

      <div className="p-2 overflow-auto">
        {/* Recipe Basic Info */}
        <div className="mb-1.5">
          <label className="block text-[10px] font-medium mb-0.5">Recipe Name</label>
          <input
            type="text"
            className="w-full border rounded p-1 text-[10px]"
            placeholder="Turkish Lentil Soup"
            value="Turkish Lentil Soup"
          />
        </div>

        <div className="mb-1.5">
          <label className="block text-[10px] font-medium mb-0.5">Brief Description</label>
          <textarea
            className="w-full border rounded p-1 h-6 text-[10px]"
            placeholder="A brief description of your recipe"
            value="A budget-friendly traditional Turkish lentil soup."
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
                  <th className="text-left p-0.5">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-0.5">Red Lentils</td>
                  <td className="p-0.5">200g</td>
                  <td className="p-0.5">5 TL</td>
                  <td className="p-0.5 text-blue-600">Link</td>
                </tr>
                <tr className="border-t">
                  <td className="p-0.5">Tomatoes</td>
                  <td className="p-0.5">100g</td>
                  <td className="p-0.5">3 TL</td>
                  <td className="p-0.5 text-blue-600">Link</td>
                </tr>
                <tr className="border-t">
                  <td className="p-0.5">Onions</td>
                  <td className="p-0.5">1 med</td>
                  <td className="p-0.5">2 TL</td>
                  <td className="p-0.5 text-blue-600">Link</td>
                </tr>
                <tr className="border-t">
                  <td className="p-0.5">Other items</td>
                  <td className="p-0.5">various</td>
                  <td className="p-0.5">5 TL</td>
                  <td className="p-0.5 text-blue-600">Link</td>
                </tr>
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td className="p-0.5 font-medium" colSpan={2}>Total Cost</td>
                  <td className="p-0.5 font-medium">15 TL</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-1.5">
          <label className="block text-[10px] font-medium mb-0.5">Preparation Instructions</label>
          <textarea
            className="w-full border rounded p-1 h-12 text-[10px]"
            value="1. Rinse lentils
2. Sauté onions and carrots
3. Add lentils and tomatoes
4. Add water and boil
5. Simmer 30 minutes
6. Add spices
7. Blend until smooth"
          />
        </div>

        {/* Tags */}
        <div className="mb-1.5">
          <label className="block text-[10px] font-medium mb-0.5">Tags</label>
          <div className="flex flex-wrap gap-1">
            <span className="bg-green-50 text-green-700 px-1 py-0.5 rounded text-[8px] flex items-center">
              budget
              <button className="ml-1 text-[8px]">×</button>
            </span>
            <span className="bg-blue-50 text-blue-700 px-1 py-0.5 rounded text-[8px] flex items-center">
              student
              <button className="ml-1 text-[8px]">×</button>
            </span>
            <span className="bg-red-50 text-red-700 px-1 py-0.5 rounded text-[8px] flex items-center">
              Turkish
              <button className="ml-1 text-[8px]">×</button>
            </span>
            <input type="text" className="border rounded px-1 py-0.5 text-[8px]" placeholder="Add tag..." />
          </div>
        </div>

        {/* Budget Tips */}
        <div className="mb-1.5">
          <label className="block text-[10px] font-medium mb-0.5">Budget Tips</label>
          <textarea
            className="w-full border rounded p-1 h-8 text-[10px]"
            value="- Buy in bulk to save money
- Use seasonal vegetables
- Freeze leftovers for meal prep
- Check local markets for deals"
          />
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

export default RecipeCreationPage;
