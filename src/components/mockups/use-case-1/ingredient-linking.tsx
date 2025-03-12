import React from 'react';

const IngredientLinking = () => {
  return (
    <div className="flex flex-col bg-white w-full h-full overflow-auto">
      <div className="bg-gray-50 p-2 border-b">
        <h1 className="text-base font-bold text-gray-800">Link Ingredient to Food Database</h1>
      </div>

      <div className="p-3 max-w-md mx-auto">
        <div className="mb-3">
          <div className="flex justify-between">
            <h2 className="font-medium text-sm">Red Lentils</h2>
            <span className="text-gray-500 text-sm">200g</span>
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="w-full border rounded p-1.5 text-xs"
            placeholder="Search food database..."
            value="red lentils"
          />
        </div>

        <div className="border rounded mb-3 overflow-hidden">
          <div className="bg-gray-50 p-1.5 font-medium text-xs">Search Results</div>

          <div className="divide-y">
            <div className="p-2 bg-blue-50 border-l-4 border-blue-400">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium text-xs">Red Lentils (Dry)</div>
                  <div className="text-xs text-gray-500">Basic food item</div>
                </div>
                <div className="text-blue-600 text-xs font-medium">Selected</div>
              </div>
            </div>

            <div className="p-2">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium text-xs">Red Lentils (Cooked)</div>
                  <div className="text-xs text-gray-500">Basic food item</div>
                </div>
                <button className="text-blue-600 text-xs">Select</button>
              </div>
            </div>

            <div className="p-2">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium text-xs">Red Lentil Flour</div>
                  <div className="text-xs text-gray-500">Basic food item</div>
                </div>
                <button className="text-blue-600 text-xs">Select</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-2 rounded mb-3">
          <div className="text-xs font-medium mb-1.5">Nutritional Information (per 100g)</div>

          <div className="grid grid-cols-2 gap-1.5 text-xs">
            <div>
              <span className="text-gray-600">Calories:</span>
              <span className="font-medium ml-1">352 kcal</span>
            </div>
            <div>
              <span className="text-gray-600">Protein:</span>
              <span className="font-medium ml-1">24.6g</span>
            </div>
            <div>
              <span className="text-gray-600">Carbs:</span>
              <span className="font-medium ml-1">63.4g</span>
            </div>
            <div>
              <span className="text-gray-600">Fat:</span>
              <span className="font-medium ml-1">1.1g</span>
            </div>
            <div>
              <span className="text-gray-600">Fiber:</span>
              <span className="font-medium ml-1">10.7g</span>
            </div>
            <div>
              <span className="text-gray-600">Iron:</span>
              <span className="font-medium ml-1">6.5mg</span>
            </div>
          </div>

          <div className="mt-1.5 text-xs">
            <span className="text-gray-600">Nutrition Score:</span>
            <span className="font-medium ml-1 text-green-600">8.4/10</span>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">Cancel</button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Confirm Link</button>
        </div>
      </div>
    </div>
  );
};

export default IngredientLinking;
