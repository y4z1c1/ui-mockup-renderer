import React from 'react';

const FoodItemReview = () => {
    return (
        <div className="bg-white w-full h-full overflow-auto">
            {/* Header */}
            <div className="border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button className="mr-2 text-gray-500 hover:text-gray-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <h1 className="text-xl font-semibold text-gray-900">Food Item Review</h1>
                    </div>
                    <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Moderator
                        </span>
                    </div>
                </div>
            </div>

            {/* Food Item Details */}
            <div className="p-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="flex justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-medium text-gray-900">Organic Quinoa</h2>
                            <p className="text-sm text-gray-500">Submitted 3 hours ago by Ayşe Y.</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending Review
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Basic Information</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Name:</p>
                                        <p className="text-sm font-medium text-gray-900">Organic Quinoa</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Category:</p>
                                        <p className="text-sm font-medium text-gray-900">Grains</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Price Range:</p>
                                        <p className="text-sm font-medium text-gray-900">₺40-60 / kg</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Availability:</p>
                                        <p className="text-sm font-medium text-gray-900">Year-round</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Submitted By:</p>
                                        <p className="text-sm font-medium text-gray-900">Ayşe Y. (Regular User)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Nutritional Information</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Calories:</p>
                                        <p className="text-sm font-medium text-gray-900">120 kcal / 100g</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Protein:</p>
                                        <p className="text-sm font-medium text-gray-900">4.4g / 100g</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Carbohydrates:</p>
                                        <p className="text-sm font-medium text-gray-900">21.3g / 100g</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Fat:</p>
                                        <p className="text-sm font-medium text-gray-900">1.9g / 100g</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Fiber:</p>
                                        <p className="text-sm font-medium text-gray-900">2.8g / 100g</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Description</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-900">
                                Organic quinoa is a nutrient-rich grain that's high in protein and contains all nine essential amino acids. It's gluten-free and easy to prepare, making it an excellent alternative to rice or couscous. This versatile grain can be used in salads, soups, or as a side dish.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Dietary Information</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Vegetarian
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Vegan
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Gluten-Free
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                High Protein
                            </span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Verification Checklist</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input id="check-1" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-1" className="ml-2 block text-sm text-gray-700">
                                    Food item name is appropriate and accurate
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input id="check-2" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-2" className="ml-2 block text-sm text-gray-700">
                                    Nutritional information appears accurate
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input id="check-3" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-3" className="ml-2 block text-sm text-gray-700">
                                    Description is informative and appropriate
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input id="check-4" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-4" className="ml-2 block text-sm text-gray-700">
                                    Dietary tags are accurate
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input id="check-5" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-5" className="ml-2 block text-sm text-gray-700">
                                    No duplicate entries in the database
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h2 className="text-lg font-medium text-gray-900 mb-3">Review Decision</h2>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input id="approve" name="decision" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="approve" className="ml-2 block text-sm font-medium text-gray-700">
                                Approve food item
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="approve-with-changes" name="decision" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="approve-with-changes" className="ml-2 block text-sm font-medium text-gray-700">
                                Approve with changes (specify in notes)
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="reject" name="decision" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="reject" className="ml-2 block text-sm font-medium text-gray-700">
                                Reject food item
                            </label>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                            Review Notes
                        </label>
                        <textarea
                            id="notes"
                            rows={3}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Add notes about this review decision..."
                        ></textarea>
                    </div>

                    <div className="mt-4 flex justify-end space-x-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Save Draft
                        </button>
                        <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Submit Decision
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItemReview; 