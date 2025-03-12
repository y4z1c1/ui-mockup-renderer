import React from 'react';

const PasswordRecoveryRequest = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-full">
      <div className="w-72 bg-white p-5 rounded shadow-md border">
        <h3 className="text-lg font-semibold text-center mb-3">Password Recovery</h3>

        <div className="flex flex-col gap-3">
          <p className="text-gray-600 text-xs mb-1">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="border rounded p-2 text-sm"
          />

          <button className="bg-blue-500 text-white py-1.5 px-4 rounded w-full mt-1 text-sm">
            Send Reset Link
          </button>

          <div className="text-center mt-3">
            <a href="#" className="text-blue-600 text-xs">Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryRequest;
