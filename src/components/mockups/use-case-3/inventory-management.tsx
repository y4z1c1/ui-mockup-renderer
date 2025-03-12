import React from 'react';

const InventoryManagement = () => {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-auto">
            <div className="bg-gray-50 p-1.5 border-b">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-bold text-gray-800">Inventory Management</h1>
                    <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                        Store Owner
                    </span>
                </div>
            </div>

            <div className="p-2 overflow-auto">
                <div className="flex justify-between items-center mb-1.5">
                    <div className="text-[10px] text-gray-600">
                        Manage your store inventory
                    </div>
                    <button className="bg-green-600 text-white px-1.5 py-0.5 rounded text-[8px]">+ Add Item</button>
                </div>

                {/* Inventory List */}
                <div className="border rounded overflow-hidden mb-1.5">
                    <table className="w-full text-[8px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left p-0.5">Product</th>
                                <th className="text-left p-0.5">Price</th>
                                <th className="text-left p-0.5">Stock</th>
                                <th className="text-left p-0.5">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-0.5">Organic Apples</td>
                                <td className="p-0.5">12 TL/kg</td>
                                <td className="p-0.5">25 kg</td>
                                <td className="p-0.5">
                                    <button className="text-blue-600 mr-1">Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-0.5">Fresh Eggs</td>
                                <td className="p-0.5">2 TL/each</td>
                                <td className="p-0.5">50 units</td>
                                <td className="p-0.5">
                                    <button className="text-blue-600 mr-1">Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-0.5">Whole Wheat Bread</td>
                                <td className="p-0.5">8 TL/loaf</td>
                                <td className="p-0.5">15 loaves</td>
                                <td className="p-0.5">
                                    <button className="text-blue-600 mr-1">Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-[8px] text-gray-500 mb-1.5">
                    Showing 3 of 24 items
                </div>
            </div>
        </div>
    );
};

export default InventoryManagement; 