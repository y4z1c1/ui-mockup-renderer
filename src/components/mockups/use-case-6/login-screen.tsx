import React from 'react';

const LoginScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-full">
      <div className="w-72 bg-white p-5 rounded shadow-md border">
        <h3 className="text-lg font-semibold text-center mb-4">Login</h3>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            className="border rounded p-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded p-2 text-sm"
          />

          <div className="flex items-center justify-between mt-1">
            <button className="bg-green-500 text-white py-1.5 px-4 rounded text-sm">
              Login
            </button>
            <a href="#" className="text-blue-600 text-xs">Forgot Password?</a>
          </div>

          <div className="bg-red-100 border border-red-200 text-red-800 p-2 rounded text-xs text-center mt-2">
            Incorrect username or password
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
