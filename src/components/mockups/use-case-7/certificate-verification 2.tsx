import React from 'react';

const CertificateVerification = () => {
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
                        <h1 className="text-xl font-semibold text-gray-900">Certificate Verification</h1>
                    </div>
                    <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Moderator
                        </span>
                    </div>
                </div>
            </div>

            {/* Certificate Details */}
            <div className="p-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="flex justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-medium text-gray-900">Profession Tag Request</h2>
                            <p className="text-sm text-gray-500">Submitted 1 day ago by Selin A.</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Dietician
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">User Information</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start mb-3">
                                    <img className="h-12 w-12 rounded-full mr-3" src="https://via.placeholder.com/48" alt="User avatar" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Selin Aydin</p>
                                        <p className="text-xs text-gray-500">Member since March 2023</p>
                                        <p className="text-xs text-gray-500">Email: selin.a@example.com</p>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <p className="mb-1">• Posted 23 recipes</p>
                                    <p className="mb-1">• 156 followers</p>
                                    <p>• No previous verification attempts</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Profession Details</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="mb-3">
                                    <p className="text-sm font-medium text-gray-900">Requested Tag: Dietician</p>
                                    <p className="text-xs text-gray-500">Institution: Istanbul University</p>
                                    <p className="text-xs text-gray-500">Graduation Year: 2019</p>
                                    <p className="text-xs text-gray-500">License Number: DT-2019-4582</p>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <p className="italic">
                                        "I am a registered dietician with 4 years of experience in clinical nutrition and weight management. I want to share evidence-based nutrition advice on this platform."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Uploaded Certificate</h3>
                        <div className="border border-gray-200 rounded-lg p-2">
                            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p className="mt-1 text-sm text-gray-500">Certificate_Selin_Aydin.pdf</p>
                                    <button className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        View Full Document
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Verification Steps</h3>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                            <p className="text-sm text-blue-800">
                                <span className="font-medium">Reminder:</span> Please verify the certificate against the official registry and check that the name matches the user's account.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input id="check-1" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-1" className="ml-2 block text-sm text-gray-700">
                                    Certificate appears authentic and matches provided details
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input id="check-2" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-2" className="ml-2 block text-sm text-gray-700">
                                    Verified against official registry
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input id="check-3" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-3" className="ml-2 block text-sm text-gray-700">
                                    Name on certificate matches user account
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input id="check-4" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="check-4" className="ml-2 block text-sm text-gray-700">
                                    Qualification is relevant to requested profession tag
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h2 className="text-lg font-medium text-gray-900 mb-3">Verification Decision</h2>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input id="approve" name="decision" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="approve" className="ml-2 block text-sm font-medium text-gray-700">
                                Approve profession tag
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="reject" name="decision" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="reject" className="ml-2 block text-sm font-medium text-gray-700">
                                Reject profession tag
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input id="more-info" name="decision" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="more-info" className="ml-2 block text-sm font-medium text-gray-700">
                                Request additional information
                            </label>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                            Verification Notes
                        </label>
                        <textarea
                            id="notes"
                            rows={3}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Add notes about this verification decision..."
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

export default CertificateVerification; 