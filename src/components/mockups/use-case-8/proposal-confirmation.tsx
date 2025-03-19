import React from 'react';
import theme from '../../../styles/theme';

// Proposal confirmation mockup component for Use Case 8
const ProposalConfirmation = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* Header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Submission Approved</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Student
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={theme.components.layout.content}>
                {/* Success Message */}
                <div className="bg-green-50 border border-green-100 rounded-lg p-1.5 mb-2 text-center">
                    <div className="flex justify-center mb-1">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-xs font-medium text-green-800 mb-0.5">Your submission has been approved</h2>
                    <p className="text-[8px] text-green-700">
                        Teff is now available in our food database
                    </p>
                </div>

                {/* Food Item Summary */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-2">
                    <div className="flex justify-between mb-1">
                        <div>
                            <h3 className="text-xs font-medium text-gray-900">Teff</h3>
                            <p className="text-[8px] text-gray-500">Whole grain</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-medium text-[8px]">8.7</span>
                            </div>
                            <span className="text-[6px] text-gray-500">Score</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-0.5 mb-1">
                        <div className="bg-gray-50 rounded p-0.5 text-center">
                            <span className="text-[6px] text-gray-500">Calories</span>
                            <p className="text-[8px] font-medium">101 kcal</p>
                        </div>
                        <div className="bg-gray-50 rounded p-0.5 text-center">
                            <span className="text-[6px] text-gray-500">Protein</span>
                            <p className="text-[8px] font-medium">3.9g</p>
                        </div>
                        <div className="bg-gray-50 rounded p-0.5 text-center">
                            <span className="text-[6px] text-gray-500">Carbs</span>
                            <p className="text-[8px] font-medium">20g</p>
                        </div>
                        <div className="bg-gray-50 rounded p-0.5 text-center">
                            <span className="text-[6px] text-gray-500">Fat</span>
                            <p className="text-[8px] font-medium">0.6g</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-1">
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                            Vegan
                        </span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                            Gluten-Free
                        </span>
                    </div>

                    <div className="text-[8px] text-gray-600">
                        Teff is a nutrient-dense ancient grain from Ethiopia.
                    </div>
                </div>

                {/* Moderator Comment */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5 mb-2">
                    <h3 className="text-[10px] font-medium text-gray-800 mb-0.5">Moderator Note:</h3>
                    <p className="text-[8px] text-gray-600">
                        Thank you for your contribution! Your submission has been verified and approved.
                        The nutrition score has been calculated based on the food's nutritional profile.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                    <button className="bg-white border border-gray-300 text-gray-700 px-1.5 py-0.5 rounded text-[8px]">
                        Back to Search
                    </button>

                    <button className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[8px]">
                        Compare with Similar Foods
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProposalConfirmation; 