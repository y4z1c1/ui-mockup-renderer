import React from 'react';

const ProfessionalForumPost = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <h1 className="text-sm font-bold text-gray-800">Forum</h1>
            </div>

            <div className="p-2 overflow-auto">
                <div className="bg-white w-full border p-2 mb-2">
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mr-1">
                                <span className="text-teal-800 font-bold text-[10px]">E</span>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <span className="font-medium text-[10px] mr-1">Ece</span>
                                    <span className="bg-teal-100 text-teal-800 text-[8px] px-0.5 rounded-full">Dietician</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-[10px] font-bold mb-0.5">Protein Sources for Students</h2>

                    <p className="text-[8px] mb-1">
                        Here are some budget-friendly protein sources for students.
                    </p>

                    <div className="mb-1">
                        <div className="text-[8px] grid grid-cols-2 gap-x-1">
                            <div>• Eggs</div>
                            <div>• Lentils</div>
                            <div>• Tuna</div>
                            <div>• Chickpeas</div>
                        </div>
                    </div>

                    <div className="flex justify-between text-[8px] text-gray-500">
                        <div className="flex gap-1">
                            <button className="flex items-center">
                                <span>👍</span> 32
                            </button>
                            <button className="flex items-center">
                                <span>💬</span> 5
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="bg-white w-full border p-1.5">
                    <h3 className="text-[10px] font-medium mb-1">Comments</h3>

                    <div className="space-y-1">
                        {/* Comment */}
                        <div className="border-b pb-1">
                            <div className="flex items-start">
                                <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                                    <span className="text-blue-800 font-bold text-[8px]">S</span>
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium text-[8px]">Student123</div>
                                    <p className="text-[8px]">
                                        Thanks for the tips!
                                    </p>
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
        </div>
    );
};

export default ProfessionalForumPost; 