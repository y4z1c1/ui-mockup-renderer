import React from 'react';

// Approval notification feed for Arda's submission
const ApprovalNotification = () => {
    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="bg-blue-50 p-2 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-base font-medium">Notifications</h1>
                    <div className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                        Arda
                    </div>
                </div>
            </div>

            {/* Notification Feed */}
            <div className="p-2 overflow-auto flex-1">
                {/* Today Section */}
                <div className="mb-2">
                    <div className="flex items-center mb-1">
                        <div className="h-px bg-gray-200 flex-grow"></div>
                        <span className="px-2 text-xs text-gray-500">Today</span>
                        <div className="h-px bg-gray-200 flex-grow"></div>
                    </div>

                    {/* Teff Approval Notification */}
                    <div className="bg-white border rounded-lg p-2 mb-2">
                        <div className="flex items-start mb-1">
                            <div className="bg-green-100 rounded-full p-1 mr-2">
                                <span className="text-base">✓</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-sm">Food Item Approved</h3>
                                <p className="text-xs text-gray-700">
                                    Your submission for <span className="font-medium">Teff</span> has been approved. It's now available in our database!
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">2 hours ago</p>
                            </div>
                        </div>

                        {/* Item Preview */}
                        <div className="bg-gray-50 rounded-lg p-2 flex">
                            <div className="flex-shrink-0 text-2xl mr-2">🌾</div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium text-sm">Teff</h3>
                                        <p className="text-xs text-gray-500">Whole grain | 100g</p>
                                    </div>
                                    <div className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        8.7
                                    </div>
                                </div>
                                <div className="mt-1 flex flex-wrap text-xs">
                                    <div className="mr-2">
                                        <span className="text-gray-500">Protein:</span>
                                        <span className="font-medium ml-1">3.9g</span>
                                    </div>
                                    <div className="mr-2">
                                        <span className="text-gray-500">Carbs:</span>
                                        <span className="font-medium ml-1">20g</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Fat:</span>
                                        <span className="font-medium ml-1">0.6g</span>
                                    </div>
                                </div>

                                <div className="mt-1 flex flex-wrap gap-1">
                                    <span className="inline-flex items-center px-1 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                                        Vegan
                                    </span>
                                    <span className="inline-flex items-center px-1 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                                        Gluten-Free
                                    </span>
                                    <span className="inline-flex items-center px-1 py-0.5 rounded-full text-[8px] font-medium bg-blue-100 text-blue-800">
                                        High Fiber
                                    </span>
                                </div>

                                <div className="mt-1 flex justify-between">
                                    <button className="text-blue-600 text-xs">
                                        View Details
                                    </button>
                                    <button className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">
                                        Add to Meal
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Moderator Note */}
                        <div className="mt-1 bg-blue-50 rounded p-1 text-xs">
                            <span className="font-medium">Moderator note:</span> Thank you for contributing to our database!
                        </div>
                    </div>

                    {/* Other Notification */}
                    <div className="bg-white border rounded-lg p-2">
                        <div className="flex items-start">
                            <div className="bg-blue-100 rounded-full p-1 mr-2">
                                <span className="text-base">🔔</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-sm">Weekly Summary</h3>
                                <p className="text-xs text-gray-700">
                                    You've logged 16 meals this week, achieving your protein goals on 5 out of 7 days.
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">8 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Yesterday Section */}
                <div>
                    <div className="flex items-center mb-1">
                        <div className="h-px bg-gray-200 flex-grow"></div>
                        <span className="px-2 text-xs text-gray-500">Yesterday</span>
                        <div className="h-px bg-gray-200 flex-grow"></div>
                    </div>

                    {/* Previous Notifications */}
                    <div className="bg-white border rounded-lg p-2 mb-2">
                        <div className="flex items-start">
                            <div className="bg-purple-100 rounded-full p-1 mr-2">
                                <span className="text-base">👤</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-sm">Profile Achievement</h3>
                                <p className="text-xs text-gray-700">
                                    You've earned the "Food Explorer" badge for adding your first food item.
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">Yesterday at 4:35 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg p-2">
                        <div className="flex items-start">
                            <div className="bg-yellow-100 rounded-full p-1 mr-2">
                                <span className="text-base">⭐</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-sm">Recipe Liked</h3>
                                <p className="text-xs text-gray-700">
                                    Your saved recipe "Teff Porridge" was liked by 3 other users.
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">Yesterday at 10:12 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="mt-auto border-t bg-white p-1">
                <div className="flex justify-around">
                    {["🏠", "🔍", "📊", "🔔", "👤"].map((icon, index) => (
                        <button
                            key={index}
                            className={`text-xl p-1 ${index === 3 ? "text-blue-600" : "text-gray-400"}`}
                        >
                            {icon}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApprovalNotification; 