import React from 'react';

const ReportReview = () => {
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
                        <h1 className="text-xl font-semibold text-gray-900">Report Review</h1>
                    </div>
                    <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Moderator
                        </span>
                    </div>
                </div>
            </div>

            {/* Report Details */}
            <div className="p-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="flex justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-medium text-gray-900">Report #12458</h2>
                            <p className="text-sm text-gray-500">Reported 2 hours ago by Ahmet K.</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Post
                        </span>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Reason for Report</h3>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                            This post is completely irrelevant to food or nutrition. It's political content that doesn't belong on this platform.
                        </p>
                    </div>

                    <div className="border-t border-gray-200 pt-4 mb-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Reported Content</h3>
                        <div className="border border-gray-200 rounded-lg p-3">
                            <div className="flex items-start mb-2">
                                <img className="h-10 w-10 rounded-full mr-3" src="https://via.placeholder.com/40" alt="User avatar" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Ali D.</p>
                                    <p className="text-xs text-gray-500">Posted 3 hours ago</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-900 mb-2">
                                What do you think about the recent political developments? I believe we should discuss this important topic here as well.
                            </p>
                            <div className="flex space-x-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                    #politics
                                </span>
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                    #discussion
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">User History</h3>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                            <p className="text-sm text-yellow-800">
                                <span className="font-medium">Note:</span> This user has received 1 warning in the past 30 days.
                            </p>
                        </div>
                        <div className="text-sm text-gray-600">
                            <p className="mb-1">• Posted 15 recipes in the last month</p>
                            <p className="mb-1">• Member since January 2023</p>
                            <p>• Previously warned for posting irrelevant content (7 days ago)</p>
                        </div>
                    </div>
                </div>

                {/* Action Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h2 className="text-lg font-medium text-gray-900 mb-3">Take Action</h2>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input id="remove-post" name="action" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="remove-post" className="ml-2 block text-sm font-medium text-gray-700">
                                Remove post
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="warn-user" name="action" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="warn-user" className="ml-2 block text-sm font-medium text-gray-700">
                                Remove post and warn user
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="ban-user" name="action" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="ban-user" className="ml-2 block text-sm font-medium text-gray-700">
                                Remove post and ban user
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="dismiss" name="action" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="dismiss" className="ml-2 block text-sm font-medium text-gray-700">
                                Dismiss report (no action needed)
                            </label>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                            Moderation Notes
                        </label>
                        <textarea
                            id="notes"
                            rows={3}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Add notes about this moderation action..."
                        ></textarea>
                    </div>

                    <div className="mt-4 flex justify-end space-x-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Cancel
                        </button>
                        <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            Submit Action
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportReview; 