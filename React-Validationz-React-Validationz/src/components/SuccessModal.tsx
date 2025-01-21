// src/components/SuccessModal.js
import React from 'react';

const SuccessModal = ({ onClose }:any) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Success!</h2>
        <p className="text-gray-700 mb-6">Your form has been successfully submitted!</p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
