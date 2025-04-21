import React from 'react';
import theme from '../../../styles/theme';

// create new store mockup component for use case 10
const CreateNewStore = () => {
    return (
        <div className={theme.components.layout.container}>
            {/* header */}
            <div className={theme.components.header.page}>
                <div className="flex justify-between items-center">
                    <h1 className={theme.components.header.title}>Create New Store</h1>
                    <span className="bg-green-100 text-green-800 text-[8px] px-1 py-0.5 rounded-full">
                        Lisa
                    </span>
                </div>
            </div>

            {/* content */}
            <div className={theme.components.layout.content}>
                {/* existing store info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-1.5 mb-2">
                    <h3 className="text-xs font-medium text-blue-800 mb-1">Current Store</h3>
                    <div className="bg-white rounded p-1 mb-1 text-[10px]">
                        <div className="flex items-center">
                            <span className="mr-1 text-green-600">📦</span>
                            <div>
                                <div className="font-medium">Lisa's Fresh Market</div>
                                <div className="text-gray-600">123 Main Street</div>
                            </div>
                        </div>
                        <div className="mt-1 text-[8px] text-gray-500">
                            Active since: Jan 15, 2023 • 120 products listed
                        </div>
                    </div>
                </div>

                {/* form */}
                <form className="bg-white border border-gray-200 rounded-lg p-1.5 mb-2">
                    <h3 className="text-xs font-medium mb-1.5">New Store Details</h3>

                    {/* store name */}
                    <div className="mb-1.5">
                        <label className="block text-[10px] text-gray-700 mb-0.5">
                            Store Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value="Lisa's Fresh Market - East Side"
                            className="w-full border border-gray-300 rounded p-1 text-[10px]"
                        />
                    </div>

                    {/* store location */}
                    <div className="mb-1.5">
                        <label className="block text-[10px] text-gray-700 mb-0.5">
                            Location <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value="150 Greenway Ave"
                            className="w-full border border-gray-300 rounded p-1 text-[10px]"
                        />
                    </div>

                    {/* contact info */}
                    <div className="mb-1.5 grid grid-cols-2 gap-1">
                        <div>
                            <label className="block text-[10px] text-gray-700 mb-0.5">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value="(555) 678-9012"
                                className="w-full border border-gray-300 rounded p-1 text-[10px]"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] text-gray-700 mb-0.5">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value="lisa.east@freshmarket.com"
                                className="w-full border border-gray-300 rounded p-1 text-[10px]"
                            />
                        </div>
                    </div>

                    {/* description */}
                    <div className="mb-1.5">
                        <label className="block text-[10px] text-gray-700 mb-0.5">
                            Store Description
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded p-1 text-[10px]"
                            rows={2}
                        >Bringing fresh, affordable groceries to the East Side community!</textarea>
                    </div>

                    {/* store type */}
                    <div className="mb-1.5">
                        <label className="block text-[10px] text-gray-700 mb-0.5">
                            Store Type
                        </label>
                        <select className="w-full border border-gray-300 rounded p-1 text-[10px]">
                            <option>Grocery</option>
                            <option>Farmer's Market</option>
                            <option>Specialty Foods</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* store hours */}
                    <div className="mb-1.5">
                        <label className="block text-[10px] text-gray-700 mb-0.5">
                            Operation Hours
                        </label>
                        <div className="grid grid-cols-7 gap-0.5 text-[8px]">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                                <div key={day} className="text-center border border-gray-200 rounded p-0.5">
                                    <div className="font-medium">{day}</div>
                                    <div>9-6</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>

                {/* action buttons */}
                <div className="flex justify-between">
                    <button className={theme.components.button.secondary}>
                        Cancel
                    </button>
                    <button className={theme.components.button.primary}>
                        Create Store
                    </button>
                </div>

                {/* note */}
                <div className="mt-2 text-[8px] text-gray-500 text-center">
                    After creating your store, you'll be able to transfer inventory items
                    and set up unique listings for each location.
                </div>
            </div>
        </div>
    );
};

export default CreateNewStore; 