import React from 'react';

const ReportReview = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            {/* Header */}
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Report Review</h1>
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
                            <h2 className="text-[10px] font-medium text-gray-900">Report Details</h2>
                            <p className="text-[8px] text-gray-500">Reported 2h ago by Ahmet K.</p>
                        </div>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-red-100 text-red-800">
                            Urgent
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <h3 className="text-[8px] font-medium text-gray-700 mb-1">Report Information</h3>
                            <div className="bg-gray-50 rounded-lg p-2">
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Type:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Post</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Reason:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Spam</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Priority:</p>
                                        <p className="text-[8px] font-medium text-gray-900">High</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[8px] font-medium text-gray-700 mb-1">Reported Content</h3>
                            <div className="bg-gray-50 rounded-lg p-2">
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Author:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Mehmet S.</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Posted:</p>
                                        <p className="text-[8px] font-medium text-gray-900">1d ago</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Location:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Food Discussion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <h3 className="text-[8px] font-medium text-gray-700 mb-1">Report Description</h3>
                        <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-[8px] text-gray-600">
                                User is posting irrelevant political content in food-related discussions. Multiple users have reported similar behavior.
                            </p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <h3 className="text-[8px] font-medium text-gray-700 mb-1">User History</h3>
                        <div className="bg-gray-50 rounded-lg p-2">
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <p className="text-[8px] text-gray-500">Previous Reports:</p>
                                    <p className="text-[8px] font-medium text-gray-900">3</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-[8px] text-gray-500">Warnings:</p>
                                    <p className="text-[8px] font-medium text-gray-900">1</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-[8px] text-gray-500">Account Age:</p>
                                    <p className="text-[8px] font-medium text-gray-900">2 months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                    <h2 className="text-[10px] font-medium text-gray-900 mb-2">Action Options</h2>

                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input id="remove" name="action" type="radio" className="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="remove" className="ml-1 block text-[8px] font-medium text-gray-700">
                                Remove Content
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="warn" name="action" type="radio" className="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="warn" className="ml-1 block text-[8px] font-medium text-gray-700">
                                Warn User
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="ban" name="action" type="radio" className="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="ban" className="ml-1 block text-[8px] font-medium text-gray-700">
                                Ban User
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="ignore" name="action" type="radio" className="h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="ignore" className="ml-1 block text-[8px] font-medium text-gray-700">
                                Ignore Report
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
                            placeholder="Add moderation notes..."
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

export default ReportReview; 