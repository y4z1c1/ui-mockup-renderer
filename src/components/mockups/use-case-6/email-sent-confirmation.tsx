import React from 'react';

const EmailSentConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-full">
      <div className="w-72 bg-white p-5 rounded shadow-md border">
        <h3 className="text-lg font-semibold text-center mb-4">Email Sent</h3>

        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
            <div className="w-10 h-7 bg-blue-600 rounded relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-t-2 border-white w-8 h-3" style={{ transform: 'rotate(-30deg)' }}></div>
              </div>
            </div>
          </div>

          <p className="text-center mt-2 text-gray-800 font-medium text-sm">
            Check your email
          </p>

          <p className="text-center text-gray-600 text-xs">
            We've sent a password reset link to:
          </p>

          <p className="text-blue-600 font-medium text-sm">
            kadir@email.com
          </p>

          <p className="text-gray-500 text-xs text-center mt-2">
            If you don't see the email, check your spam folder or request another link.
          </p>

          <div className="text-center mt-3">
            <a href="#" className="text-blue-600 text-xs">Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSentConfirmation;
