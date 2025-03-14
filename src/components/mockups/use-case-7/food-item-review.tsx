import React from 'react';

const FoodItemReview = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            {/* Header */}
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Food Item Review</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Moderator
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-2 overflow-auto">
                <div className="bg-white border border-gray-200 rounded-lg p-2 mb-2">
                    <div className="flex justify-between mb-2">
                        <div>
                            <h2 className="text-[10px] font-medium text-gray-900">Organic Quinoa</h2>
                            <p className="text-[8px] text-gray-500">Submitted 1h ago by Ayşe Y.</p>
                        </div>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-yellow-100 text-yellow-800">
                            Pending Review
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <h3 className="text-[8px] font-medium text-gray-700 mb-1">Basic Information</h3>
                            <div className="bg-gray-50 rounded-lg p-2">
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Name:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Organic Quinoa</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Category:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Grains</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Price:</p>
                                        <p className="text-[8px] font-medium text-gray-900">$5.99</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[8px] font-medium text-gray-700 mb-1">Nutritional Info</h3>
                            <div className="bg-gray-50 rounded-lg p-2">
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Calories:</p>
                                        <p className="text-[8px] font-medium text-gray-900">120</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Protein:</p>
                                        <p className="text-[8px] font-medium text-gray-900">4g</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Carbs:</p>
                                        <p className="text-[8px] font-medium text-gray-900">22g</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <h3 className="text-[8px] font-medium text-gray-700 mb-1">Description</h3>
                        <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-[8px] text-gray-900">
                                Premium organic quinoa sourced from sustainable farms. Perfect for healthy meals and salads.
                            </p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <h3 className="text-[8px] font-medium text-gray-700 mb-1">Dietary Tags</h3>
                        <div className="flex flex-wrap gap-1">
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                                Vegan
                            </span>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                                Gluten-Free
                            </span>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                                Organic
                            </span>
                        </div>
                    </div>
                </div>

                {/* Action Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                    <h2 className="text-[10px] font-medium text-gray-900 mb-2">Review Decision</h2>

                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input id="approve" name="decision" type="radio" className="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="approve" className="ml-1 block text-[8px] font-medium text-gray-700">
                                Approve
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="reject" name="decision" type="radio" className="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="reject" className="ml-1 block text-[8px] font-medium text-gray-700">
                                Reject
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="request-info" name="decision" type="radio" className="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="request-info" className="ml-1 block text-[8px] font-medium text-gray-700">
                                Request More Info
                            </label>
                        </div>
                    </div>

                    <div className="mt-2">
                        <label htmlFor="notes" className="block text-[8px] font-medium text-gray-700 mb-0.5">
                            Notes
                        </label>
                        <textarea
                            id="notes"
                            rows={2}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full text-[8px] border border-gray-300 rounded-md"
                            placeholder="Add review notes..."
                        ></textarea>
                    </div>

                    <div className="mt-2 flex justify-end space-x-2">
                        <button className="px-2 py-1 border border-gray-300 rounded-md shadow-sm text-[8px] font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Cancel
                        </button>
                        <button className="px-2 py-1 border border-transparent rounded-md shadow-sm text-[8px] font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItemReview; 