import React from 'react';

const ModerationHistory = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            {/* Header */}
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Moderation History</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Moderator
                    </span>
                </div>
            </div>

            {/* Filters */}
            <div className="p-2 border-b border-gray-200">
                <div className="flex flex-wrap gap-2">
                    <div className="flex-1 min-w-[120px]">
                        <select className="w-full text-[8px] border border-gray-300 rounded-md">
                            <option value="">All Actions</option>
                            <option value="post-removal">Post Removal</option>
                            <option value="user-warning">User Warning</option>
                            <option value="user-ban">User Ban</option>
                            <option value="food-approval">Food Item Approval</option>
                            <option value="certificate-verification">Certificate Verification</option>
                        </select>
                    </div>

                    <div className="flex-1 min-w-[120px]">
                        <select className="w-full text-[8px] border border-gray-300 rounded-md">
                            <option value="all">All Time</option>
                            <option value="today">Today</option>
                            <option value="week">Past Week</option>
                            <option value="month">Past Month</option>
                        </select>
                    </div>

                    <div className="flex-1 min-w-[120px]">
                        <select className="w-full text-[8px] border border-gray-300 rounded-md">
                            <option value="">All Moderators</option>
                            <option value="vildan" selected>Vildan (You)</option>
                            <option value="mehmet">Mehmet K.</option>
                            <option value="zeynep">Zeynep B.</option>
                        </select>
                    </div>

                    <div className="flex-1 min-w-[120px]">
                        <input
                            type="text"
                            className="w-full text-[8px] border border-gray-300 rounded-md"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>

            {/* History Table */}
            <div className="p-2 overflow-auto">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">
                                    Date & Time
                                </th>
                                <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">
                                    Action
                                </th>
                                <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">
                                    Target
                                </th>
                                <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">
                                    Moderator
                                </th>
                                <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">
                                    Reason
                                </th>
                                <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50">
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">
                                    2h ago
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap">
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-red-100 text-red-800">
                                        Post Removal
                                    </span>
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-900">
                                    Irrelevant content
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-900">
                                    Vildan
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">
                                    Spam content
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">
                                    <button className="text-blue-600 hover:text-blue-900">View</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">
                                    5h ago
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap">
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                                        Food Approval
                                    </span>
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-900">
                                    Organic Quinoa
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-900">
                                    Vildan
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">
                                    Verified product
                                </td>
                                <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">
                                    <button className="text-blue-600 hover:text-blue-900">View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-2 flex items-center justify-between">
                    <div className="text-[8px] text-gray-700">
                        Showing 1 to 10 of 25 results
                    </div>
                    <div className="flex space-x-1">
                        <button className="px-1.5 py-0.5 text-[8px] border border-gray-300 rounded-md">
                            Previous
                        </button>
                        <button className="px-1.5 py-0.5 text-[8px] border border-gray-300 rounded-md">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModerationHistory; 