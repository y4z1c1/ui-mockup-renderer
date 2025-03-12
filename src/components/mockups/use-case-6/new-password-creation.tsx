import React from 'react';

const NewPasswordCreation = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-full">
      <div className="w-72 bg-white p-5 rounded shadow-md border">
        <h3 className="text-lg font-semibold text-center mb-3">Create New Password</h3>

        <div className="flex flex-col gap-3">
          <p className="text-gray-600 text-xs mb-1">
            Please create a new secure password for your account.
          </p>

          <input
            type="password"
            placeholder="New Password"
            className="border rounded p-2 text-sm"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded p-2 text-sm"
          />

          <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
            <p className="text-xs">Password must include:</p>
            <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-xs">
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
              <li>One number</li>
            </ul>
          </div>

          <button className="bg-green-500 text-white py-1.5 px-4 rounded w-full mt-1 text-sm">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordCreation;
