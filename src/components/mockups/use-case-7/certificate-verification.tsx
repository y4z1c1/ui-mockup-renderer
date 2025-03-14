import React from 'react';

const CertificateVerification = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            {/* Header */}
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Certificate Verification</h1>
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
                            <h2 className="text-[10px] font-medium text-gray-900">Profession Tag Request</h2>
                            <p className="text-[8px] text-gray-500">Submitted 2h ago by Selin A.</p>
                        </div>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-yellow-100 text-yellow-800">
                            Pending Verification
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <h3 className="text-[8px] font-medium text-gray-700 mb-1">User Information</h3>
                            <div className="bg-gray-50 rounded-lg p-2">
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Name:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Selin A.</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Email:</p>
                                        <p className="text-[8px] font-medium text-gray-900">selin@example.com</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Member Since:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Jan 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[8px] font-medium text-gray-700 mb-1">Profession Details</h3>
                            <div className="bg-gray-50 rounded-lg p-2">
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Profession:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Dietician</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">Institution:</p>
                                        <p className="text-[8px] font-medium text-gray-900">Istanbul University</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[8px] text-gray-500">License Number:</p>
                                        <p className="text-[8px] font-medium text-gray-900">DIET-2020-123</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <h3 className="text-[8px] font-medium text-gray-700 mb-1">Certificate</h3>
                        <div className="bg-gray-50 rounded-lg p-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-[8px] font-medium text-gray-900">Dietician License Certificate</p>
                                    <p className="text-[8px] text-gray-500">PDF Document • 2.4 MB</p>
                                </div>
                                <button className="px-2 py-1 border border-gray-300 rounded-md shadow-sm text-[8px] font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <h3 className="text-[8px] font-medium text-gray-700 mb-1">Verification Steps</h3>
                        <div className="bg-gray-50 rounded-lg p-2">
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input type="checkbox" className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                    <label className="ml-1 block text-[8px] font-medium text-gray-700">
                                        Certificate authenticity verified
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                    <label className="ml-1 block text-[8px] font-medium text-gray-700">
                                        License number matches institution records
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                    <label className="ml-1 block text-[8px] font-medium text-gray-700">
                                        Institution records checked
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                    <h2 className="text-[10px] font-medium text-gray-900 mb-2">Verification Decision</h2>

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
                            placeholder="Add verification notes..."
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

export default CertificateVerification; 