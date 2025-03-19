import React from 'react';

const ModerationDashboard = () => {
    return (
        <div className="bg-white w-full h-full overflow-auto">
            {/* Header */}
            <div className="border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900">Moderation Dashboard</h1>
                        <p className="text-sm text-gray-500">Welcome back, Vildan</p>
                    </div>
                    <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Moderator
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-4 p-4">
                <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-red-800">Pending Reports</p>
                    <p className="text-2xl font-bold text-red-600">12</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">Food Items for Review</p>
                    <p className="text-2xl font-bold text-yellow-600">8</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-purple-800">Profession Verifications</p>
                    <p className="text-2xl font-bold text-purple-600">5</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Actions Today</p>
                    <p className="text-2xl font-bold text-green-600">7</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-4">
                <div className="mb-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-3">Recent Reports</h2>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported By</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            Post
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Irrelevant content about politics</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Ahmet K.</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                        <button className="text-blue-600 hover:text-blue-900">Review</button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            User
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Spam accounts posting ads</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Zeynep T.</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">5 hours ago</td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                        <button className="text-blue-600 hover:text-blue-900">Review</button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 bg-gray-50">
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            Post
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Irrelevant post by same user</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Mehmet A.</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Just now</td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            Urgent
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                        <button className="text-blue-600 hover:text-blue-900">Review</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-3">Food Items for Review</h2>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Organic Quinoa</p>
                                        <p className="text-xs text-gray-500">Submitted by: Ayşe Y.</p>
                                    </div>
                                    <div>
                                        <button className="text-green-600 hover:text-green-900 text-sm mr-2">Approve</button>
                                        <button className="text-red-600 hover:text-red-900 text-sm">Reject</button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Gluten-Free Pasta</p>
                                        <p className="text-xs text-gray-500">Submitted by: Kemal B.</p>
                                    </div>
                                    <div>
                                        <button className="text-green-600 hover:text-green-900 text-sm mr-2">Approve</button>
                                        <button className="text-red-600 hover:text-red-900 text-sm">Reject</button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Vegan Protein Powder</p>
                                        <p className="text-xs text-gray-500">Submitted by: Deniz K.</p>
                                    </div>
                                    <div>
                                        <button className="text-green-600 hover:text-green-900 text-sm mr-2">Approve</button>
                                        <button className="text-red-600 hover:text-red-900 text-sm">Reject</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <button className="text-blue-600 hover:text-blue-900 text-sm">View All (8)</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-3">Profession Verifications</h2>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Dietician</p>
                                        <p className="text-xs text-gray-500">Requested by: Selin A.</p>
                                    </div>
                                    <div>
                                        <button className="text-blue-600 hover:text-blue-900 text-sm">View Certificate</button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Store Owner</p>
                                        <p className="text-xs text-gray-500">Requested by: Burak T.</p>
                                    </div>
                                    <div>
                                        <button className="text-blue-600 hover:text-blue-900 text-sm">View Certificate</button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Dietician</p>
                                        <p className="text-xs text-gray-500">Requested by: Ece M.</p>
                                    </div>
                                    <div>
                                        <button className="text-blue-600 hover:text-blue-900 text-sm">View Certificate</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <button className="text-blue-600 hover:text-blue-900 text-sm">View All (5)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModerationDashboard; 