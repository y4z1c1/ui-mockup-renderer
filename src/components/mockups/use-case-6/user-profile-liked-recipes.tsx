import React from 'react';

const UserProfileLikedRecipes = () => {
  return (
    <div className="flex flex-col bg-white w-full h-full">
      {/* Header */}
      <div className="border-b">
        <h3 className="text-lg font-semibold p-3">User Profile - Kadir</h3>
      </div>

      <div className="flex flex-row h-full">
        {/* Menu */}
        <div className="w-64 border-r h-full">
          <div className="p-3">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-800 font-bold">K</span>
              </div>
              <div>
                <p className="font-medium">Kadir</p>
                <p className="text-xs text-gray-500">Member since 2023</p>
              </div>
            </div>

            <ul className="space-y-1 text-sm">
              <li className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded">Personal Information</li>
              <li className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded">Allergies & Preferences</li>
              <li className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded">Shopping Lists</li>
              <li className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded">Inventory Items</li>
              <li className="py-2 px-3 bg-green-50 text-green-800 font-medium rounded">Liked Recipes</li>
              <li className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded">Liked Posts</li>
              <li className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded">Account Settings</li>
              <li className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded">Logout</li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-auto">
          <h4 className="text-lg font-medium mb-3">Your Liked Recipes</h4>

          <div className="space-y-3">
            {/* Recipe Card 1 */}
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-3">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-yellow-100 rounded-md flex items-center justify-center mr-3">
                    <span className="text-yellow-800">🍗</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h5 className="font-medium">High-Protein Grilled Chicken Bowl</h5>
                      <div className="w-7 h-7 bg-green-50 rounded-full border border-green-400 flex items-center justify-center">
                        <span className="text-xs text-green-800">9.2</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Protein: 32g | Calories: 450 | Cost: ₺45</p>
                    <div className="flex space-x-2 mt-2">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">High-Protein</span>
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">Muscle Building</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipe Card 2 */}
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-3">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                    <span className="text-blue-800">🥛</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h5 className="font-medium">Protein Smoothie with Greek Yogurt</h5>
                      <div className="w-7 h-7 bg-green-50 rounded-full border border-green-400 flex items-center justify-center">
                        <span className="text-xs text-green-800">8.7</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Protein: 24g | Calories: 320 | Cost: ₺25</p>
                    <div className="flex space-x-2 mt-2">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">High-Protein</span>
                      <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded">Quick</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipe Card 3 */}
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-3">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                    <span className="text-purple-800">🍲</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h5 className="font-medium">Muscle-Building Lentil & Quinoa Bowl</h5>
                      <div className="w-7 h-7 bg-green-50 rounded-full border border-green-400 flex items-center justify-center">
                        <span className="text-xs text-green-800">8.4</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Protein: 22g | Calories: 380 | Cost: ₺30</p>
                    <div className="flex space-x-2 mt-2">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">Plant Protein</span>
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">Budget-Friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileLikedRecipes;
