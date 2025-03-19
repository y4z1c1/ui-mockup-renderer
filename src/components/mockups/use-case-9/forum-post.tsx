import React from 'react';
import theme from '../../../styles/theme';

// Forum post sharing mockup component for Use Case 9
const ForumPost = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* Header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Community Forum</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Sam
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={theme.components.layout.content}>
                {/* Post Creation Form */}
                <div className="bg-white border border-gray-200 rounded-lg p-1.5 mb-1.5">
                    <h3 className="text-xs font-medium mb-1">Share Your Budget Shopping Experience</h3>

                    <div className="space-y-1.5">
                        <div>
                            <label className="block text-[10px] font-medium text-gray-700 mb-0.5">
                                Title
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded p-1 text-xs focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Add a title to your post"
                                value="How I saved $16 on my weekly groceries!"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-medium text-gray-700 mb-0.5">
                                Content
                            </label>
                            <textarea
                                className="w-full border border-gray-300 rounded p-1 text-xs focus:ring-blue-500 focus:border-blue-500"
                                rows={4}
                                placeholder="Share your experience..."
                                value="I wanted to share how I managed to cut my grocery bill from $45 to just $28.75 this week by shopping at multiple stores and comparing prices. I've attached my shopping list below that shows exactly where I bought each item.

The biggest savings were on beans, rice, and frozen vegetables at ValueGrocer. Their store brand is much cheaper and tastes just as good!"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-medium text-gray-700 mb-0.5">
                                Tags
                            </label>
                            <div className="flex flex-wrap gap-1 mb-1">
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-blue-100 text-blue-800">
                                    Budget Shopping
                                    <button className="ml-0.5 text-blue-500">×</button>
                                </span>
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-green-100 text-green-800">
                                    Meal Planning
                                    <button className="ml-0.5 text-green-500">×</button>
                                </span>
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-gray-100 text-gray-800">
                                    College
                                    <button className="ml-0.5 text-gray-500">×</button>
                                </span>
                                <button className="text-[8px] text-blue-600">+ Add Tag</button>
                            </div>
                        </div>

                        {/* Attachment Card */}
                        <div>
                            <label className="block text-[10px] font-medium text-gray-700 mb-0.5">
                                Attachments
                            </label>

                            <div className="border border-gray-200 rounded p-1 bg-gray-50">
                                <div className="flex items-center justify-between mb-0.5">
                                    <div className="flex items-center">
                                        <span className="text-xs mr-1">🛒</span>
                                        <span className="text-[10px] font-medium">March 18-24 Shopping List</span>
                                    </div>
                                    <button className="text-[8px] text-red-500">Remove</button>
                                </div>

                                {/* Preview of shopping list */}
                                <div className="bg-white border border-gray-200 rounded p-1">
                                    <div className="flex justify-between items-center text-[8px]">
                                        <div>
                                            <span className="font-medium">Weekly Shopping List</span>
                                            <span className="text-gray-500 ml-1">21 items</span>
                                        </div>
                                        <div className="font-medium text-green-600">$28.75 total</div>
                                    </div>

                                    <div className="flex items-center text-[8px] text-gray-500 mt-0.5">
                                        <div className="flex-1">From: SaveMart (8 items)</div>
                                        <div className="flex-1">From: ValueGrocer (13 items)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-medium text-gray-700 mb-0.5">
                                Visibility
                            </label>
                            <div className="flex gap-2">
                                <div className="flex items-center">
                                    <input type="radio" checked className="w-2.5 h-2.5 mr-0.5" />
                                    <span className="text-[10px]">Public</span>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" className="w-2.5 h-2.5 mr-0.5" />
                                    <span className="text-[10px]">Friends Only</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Posts */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5 mb-1.5">
                    <h3 className="text-[10px] font-medium text-gray-700 mb-1">Similar Posts You Might Like</h3>

                    <div className="space-y-1">
                        <div className="bg-white rounded border border-gray-100 p-1">
                            <div className="flex items-start">
                                <div className="flex-1">
                                    <div className="text-[10px] font-medium">Monthly Grocery Budget for 1 Person</div>
                                    <div className="flex items-center text-[8px] text-gray-500">
                                        <span>@budget_chef</span>
                                        <span className="mx-0.5">•</span>
                                        <span>3 days ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="text-[8px]">43 comments</span>
                                    <span className="bg-green-100 text-green-800 text-[8px] px-1 rounded-full">Popular</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded border border-gray-100 p-1">
                            <div className="flex items-start">
                                <div className="flex-1">
                                    <div className="text-[10px] font-medium">Price comparison: Farmer's Market vs. Grocery Stores</div>
                                    <div className="flex items-center text-[8px] text-gray-500">
                                        <span>@market_savvy</span>
                                        <span className="mx-0.5">•</span>
                                        <span>1 week ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="text-[8px]">21 comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button className={theme.components.button.secondary}>
                        Save Draft
                    </button>
                    <button className={theme.components.button.primary}>
                        Post to Forum
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForumPost; 