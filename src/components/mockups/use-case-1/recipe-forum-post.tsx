import React from 'react';

const RecipeForumPost = () => {
  return (
    <div className="flex flex-col bg-white w-full h-full overflow-auto">
      <div className="bg-gray-50 p-1.5 border-b">
        <h1 className="text-sm font-bold text-gray-800">Recipe Forum</h1>
      </div>

      <div className="p-2 overflow-auto">
        <div className="bg-white w-full border p-2 mb-2">
          <div className="flex justify-between mb-1">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                <span className="text-blue-800 font-bold text-[10px]">C</span>
              </div>
              <div>
                <div className="font-medium text-[10px]">Can</div>
                <div className="text-[8px] text-gray-500">Student • 2h ago</div>
              </div>
            </div>

            <div className="flex items-center gap-0.5">
              <span className="bg-green-50 text-green-700 px-0.5 rounded text-[8px]">budget</span>
              <span className="bg-blue-50 text-blue-700 px-0.5 rounded text-[8px]">student</span>
            </div>
          </div>

          <h2 className="text-[10px] font-bold mb-0.5">Turkish Lentil Soup</h2>

          <p className="text-[8px] mb-1">
            A budget-friendly traditional Turkish lentil soup.
          </p>

          <div className="flex gap-1 mb-1">
            <div className="w-1/4 bg-gray-200 h-12 rounded flex items-center justify-center">
              <span className="text-gray-500 text-[8px]">Image</span>
            </div>

            <div className="w-3/4">
              <div className="grid grid-cols-3 gap-0.5 text-[8px]">
                <div className="flex items-center gap-0.5">
                  <span className="w-1 h-1 bg-red-100 rounded-full"></span>
                  <span className="text-gray-600">Cost: 15 TL</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="w-1 h-1 bg-green-100 rounded-full"></span>
                  <span className="text-gray-600">Protein: 18g</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="w-1 h-1 bg-blue-100 rounded-full"></span>
                  <span className="text-gray-600">Prep: 10m</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="w-1 h-1 bg-yellow-100 rounded-full"></span>
                  <span className="text-gray-600">Cook: 30m</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="w-1 h-1 bg-purple-100 rounded-full"></span>
                  <span className="text-gray-600">Servings: 4</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="w-1 h-1 bg-indigo-100 rounded-full"></span>
                  <span className="text-green-600">Score: 8.2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-1">
            <div className="text-[8px] font-medium mb-0.5">Ingredients</div>
            <div className="text-[8px] grid grid-cols-2 gap-x-1">
              <div>• Red Lentils (200g)</div>
              <div>• Onions (1 medium)</div>
              <div>• Diced Tomatoes (100g)</div>
              <div>• Carrots (1 medium)</div>
              <div>• Pul Biber (1 tsp)</div>
              <div>• Other spices</div>
            </div>
          </div>

          <div className="mb-1">
            <div className="text-[8px] font-medium mb-0.5">Instructions</div>
            <div className="text-[8px]">
              Rinse lentils, sauté onions & carrots, add lentils & tomatoes, add water, boil, simmer 30m, add spices, blend.
            </div>
          </div>

          <div className="mb-1 bg-yellow-50 p-1 rounded border border-yellow-100">
            <div className="text-[8px] font-medium">Budget Tips</div>
            <div className="text-[8px]">
              Buy in bulk, use seasonal vegetables, freeze leftovers.
            </div>
          </div>

          <div className="flex justify-between text-[8px] text-gray-500">
            <div className="flex gap-1">
              <button className="flex items-center">
                <span>👍</span> 24
              </button>
              <button className="flex items-center">
                <span>💬</span> 3
              </button>
            </div>

            <button className="text-blue-600 text-[8px]">
              Save Recipe
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white w-full border p-1.5">
          <h3 className="text-[10px] font-medium mb-1">Comments (3)</h3>

          <div className="space-y-1">
            {/* Comment 1 */}
            <div className="border-b pb-1">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-1">
                  <span className="text-green-800 font-bold text-[8px]">A</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="font-medium text-[8px]">Ayşe</div>
                    <div className="text-[8px] text-gray-500">1h</div>
                  </div>
                  <p className="text-[8px]">
                    Great recipe! Found lentils on sale at A101.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="border-b pb-1">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center mr-1">
                  <span className="text-purple-800 font-bold text-[8px]">M</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="font-medium text-[8px]">Mehmet</div>
                    <div className="text-[8px] text-gray-500">45m</div>
                  </div>
                  <p className="text-[8px]">
                    Try adding mint for extra flavor!
                  </p>
                </div>
              </div>
            </div>

            {/* Comment 3 with Author Reply */}
            <div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center mr-1">
                  <span className="text-red-800 font-bold text-[8px]">Z</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="font-medium text-[8px]">Zeynep</div>
                    <div className="text-[8px] text-gray-500">20m</div>
                  </div>
                  <p className="text-[8px]">
                    How long does this keep in the fridge?
                  </p>
                </div>
              </div>

              {/* Author Reply */}
              <div className="ml-5 bg-gray-50 p-0.5 rounded mt-0.5">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                    <span className="text-blue-800 font-bold text-[8px]">C</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium text-[8px]">Can <span className="text-[8px] bg-blue-100 text-blue-700 px-0.5 rounded">Author</span></div>
                      <div className="text-[8px] text-gray-500">5m</div>
                    </div>
                    <p className="text-[8px]">
                      3-4 days in fridge, or freeze in portions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Comment */}
          <div className="mt-1">
            <textarea
              className="w-full border rounded p-0.5 text-[8px] h-6"
              placeholder="Add a comment..."
            />

            <div className="flex justify-end mt-0.5">
              <button className="bg-blue-600 text-white px-1 py-0.5 rounded text-[8px]">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeForumPost;
