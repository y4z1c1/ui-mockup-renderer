import React from 'react';

const DietitianVerification = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <h1 className="text-sm font-bold text-gray-800">Professional Verification</h1>
            </div>

            <div className="p-2 overflow-auto">
                <div className="mb-2 text-[10px] text-gray-600">
                    Complete the verification process to receive a verified professional badge and access to professional features.
                </div>

                {/* Professional Information */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Profession Tag</label>
                    <select className="w-full border rounded p-1 text-[10px]">
                        <option>Dietician</option>
                        <option>Store Owner</option>
                    </select>
                </div>

                {/* Document Upload */}
                <div className="mb-1.5">
                    <label className="block text-[10px] font-medium mb-0.5">Upload Certificate</label>
                    <div className="border border-dashed rounded p-1.5 flex items-center justify-between bg-gray-50">
                        <div className="text-[10px] text-gray-500">Upload your professional certificate</div>
                        <button className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[8px]">Browse</button>
                    </div>
                </div>

                {/* Verification Notice */}
                <div className="mb-2 p-1.5 bg-yellow-50 border border-yellow-200 rounded text-[8px] text-yellow-800">
                    <div className="font-medium mb-0.5">Verification Process:</div>
                    <p>Your credentials will be reviewed by our team within 2-3 business days. You'll receive an email notification once the verification is complete.</p>
                </div>

                {/* Terms */}
                <div className="mb-1.5">
                    <label className="flex items-start text-[10px]">
                        <input type="checkbox" className="mt-0.5 mr-1" checked />
                        <span>I confirm all information is accurate</span>
                    </label>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-1.5">
                    <button className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px]">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default DietitianVerification; 