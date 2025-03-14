import React from 'react';

const ModerationDashboard = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            {/* Header */}
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-sm font-bold text-gray-800">Moderation Dashboard</h1>
                        <p className="text-[8px] text-gray-500">Welcome back, Vildan</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Moderator
                    </span>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-2 p-2">
                <div className="bg-red-50 p-2 rounded-lg aspect-square flex flex-col justify-center">
                    <p className="text-[8px] font-medium text-red-800">Pending Reports</p>
                    <p className="text-[10px] font-bold text-red-600">12</p>
                </div>
                <div className="bg-yellow-50 p-2 rounded-lg aspect-square flex flex-col justify-center">
                    <p className="text-[8px] font-medium text-yellow-800">Food Items</p>
                    <p className="text-[10px] font-bold text-yellow-600">8</p>
                </div>
                <div className="bg-purple-50 p-2 rounded-lg aspect-square flex flex-col justify-center">
                    <p className="text-[8px] font-medium text-purple-800">Verifications</p>
                    <p className="text-[10px] font-bold text-purple-600">5</p>
                </div>
                <div className="bg-green-50 p-2 rounded-lg aspect-square flex flex-col justify-center">
                    <p className="text-[8px] font-medium text-green-800">Actions Today</p>
                    <p className="text-[10px] font-bold text-green-600">7</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-2">
                <div className="mb-4">
                    <h2 className="text-[10px] font-medium text-gray-900 mb-2">Recent Reports</h2>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">Type</th>
                                    <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">Content</th>
                                    <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">Reported By</th>
                                    <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">Status</th>
                                    <th className="px-2 py-1.5 text-left text-[8px] font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-2 py-1.5 whitespace-nowrap">
                                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-red-100 text-red-800">
                                            Post
                                        </span>
                                    </td>
                                    <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-900">Irrelevant content about politics</td>
                                    <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">Ahmet K.</td>
                                    <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">2h ago</td>
                                    <td className="px-2 py-1.5 whitespace-nowrap">
                                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-2 py-1.5 whitespace-nowrap text-[8px] text-gray-500">
                                        <button className="text-blue-600 hover:text-blue-900">Review</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-2 aspect-square">
                        <h2 className="text-[10px] font-medium text-gray-900 mb-2">Food Items for Review</h2>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-1.5 hover:bg-gray-50 rounded">
                                <div>
                                    <p className="text-[8px] font-medium text-gray-900">Organic Quinoa</p>
                                    <p className="text-[7px] text-gray-500">Submitted by: Ayşe Y.</p>
                                </div>
                                <div>
                                    <button className="text-green-600 hover:text-green-900 text-[8px] mr-1">Approve</button>
                                    <button className="text-red-600 hover:text-red-900 text-[8px]">Reject</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-center">
                            <button className="text-blue-600 hover:text-blue-900 text-[8px]">View All (8)</button>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-2 aspect-square">
                        <h2 className="text-[10px] font-medium text-gray-900 mb-2">Profession Verifications</h2>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-1.5 hover:bg-gray-50 rounded">
                                <div>
                                    <p className="text-[8px] font-medium text-gray-900">Dietician</p>
                                    <p className="text-[7px] text-gray-500">Requested by: Selin A.</p>
                                </div>
                                <div>
                                    <button className="text-blue-600 hover:text-blue-900 text-[8px]">View Certificate</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-center">
                            <button className="text-blue-600 hover:text-blue-900 text-[8px]">View All (5)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModerationDashboard; 