import React from 'react';

const RecipeDetailView = () => {
  return (
    <div className="flex flex-col bg-white w-full h-full overflow-auto">
      {/* Header */}
      <div className="bg-green-50 p-2 flex justify-between items-center border-b border-green-100">
        <div>
          <h2 className="text-base font-bold text-green-800">High-Protein Grilled Chicken Bowl</h2>
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">High-Protein</span>
            <span className="text-xs bg-green-50 text-green-700 px-1.5 py-0.5 rounded">Muscle Building</span>
            <span className="text-xs bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded">Budget-Friendly</span>
          </div>
        </div>
        <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-xs">9.2</span>
        </div>
      </div>

      <div className="p-3 overflow-auto">
        {/* Image and Nutrition */}
        <div className="flex flex-row gap-3 mb-3">
          {/* Recipe Image Placeholder */}
          <div className="w-1/2 h-36 bg-gray-200 rounded flex items-center justify-center">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-gray-500 mt-1 text-xs">Recipe Image</span>
            </div>
          </div>

          {/* Nutrition Info */}
          <div className="w-1/2 bg-gray-50 p-2 rounded">
            <h3 className="font-medium text-xs mb-1.5">Nutrition Information</h3>

            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-0.5 text-xs">
                  <span className="font-medium">Calories</span>
                  <span>450 kcal</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full">
                  <div className="w-8/12 h-1.5 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-0.5 text-xs">
                  <span className="font-medium">Protein</span>
                  <span>32g</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full">
                  <div className="w-9/12 h-1.5 bg-green-600 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-0.5 text-xs">
                  <span className="font-medium">Carbs</span>
                  <span>38g</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full">
                  <div className="w-6/12 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-0.5 text-xs">
                  <span className="font-medium">Fat</span>
                  <span>18g</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full">
                  <div className="w-5/12 h-1.5 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-3">
          <h3 className="font-medium text-xs mb-1">Ingredients</h3>
          <hr className="mb-1.5" />

          <ul className="space-y-0.5">
            {[
              { name: "Chicken breast", amount: "200g", price: "₺22" },
              { name: "Brown rice", amount: "100g", price: "₺5" },
              { name: "Broccoli", amount: "80g", price: "₺7" },
              { name: "Bell peppers", amount: "50g", price: "₺6" },
              { name: "Olive oil", amount: "10ml", price: "₺3" },
              { name: "Spices and seasonings", amount: "", price: "₺2" }
            ].map((ingredient, index) => (
              <li key={index} className="flex items-center border-b pb-0.5 text-xs">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1.5"></div>
                <div className="flex-1">
                  <span className="font-medium">{ingredient.name}</span>
                  {ingredient.amount && <span className="text-gray-500 ml-1">({ingredient.amount})</span>}
                </div>
                <span className="text-gray-700 font-medium">{ingredient.price}</span>
              </li>
            ))}
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 p-1.5 rounded-md mt-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-medium text-yellow-800">Total Cost:</span>
              <span className="font-bold text-yellow-800">₺45</span>
            </div>
            <div className="mt-0.5 text-xs">
              <span className="text-yellow-700">Best prices at: </span>
              <span className="font-medium text-yellow-800">MigrosMarket, A101</span>
            </div>
          </div>
        </div>

        {/* Preparation Steps */}
        <div>
          <h3 className="font-medium text-xs mb-1">Preparation Steps</h3>
          <hr className="mb-1.5" />

          <ol className="space-y-1">
            {[
              "Season chicken breast with salt, pepper, and herbs.",
              "Grill chicken for about 6-8 minutes on each side until cooked through.",
              "Cook brown rice according to package instructions.",
              "Steam broccoli and sauté bell peppers in olive oil.",
              "Assemble all ingredients in a bowl and serve."
            ].map((step, index) => (
              <li key={index} className="flex text-xs">
                <div className="w-4 h-4 rounded-full bg-green-100 text-green-800 flex items-center justify-center font-medium mr-1.5 mt-0.5 text-xs">
                  {index + 1}
                </div>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-3 flex justify-between">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded flex items-center text-xs">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Recipes
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded flex items-center text-xs">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              Save to Meal Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailView;
