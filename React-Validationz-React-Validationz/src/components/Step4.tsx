// src/components/Step4.js
import React, { useState } from 'react';
import SuccessModal from './SuccessModal';

const Step4 = ({ formData }:any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    // Show success modal on form submission
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Review & Submit</h2>

      <div className="space-y-4">
        <div>
          <strong>Username:</strong> {formData.username}
        </div>
        <div>
          <strong>Email:</strong> {formData.email}
        </div>
        <div>
          <strong>First Name:</strong> {formData.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {formData.lastName}
        </div>
        <div>
          <strong>Date of Birth:</strong> {formData.dateOfBirth}
        </div>
        <div>
          <strong>Phone Number:</strong> {formData.phoneNumber}
        </div>
        <div>
          <strong>Security Question 1:</strong> {formData.securityQuestion1}
        </div>
        <div>
          <strong>Security Question 2:</strong> {formData.securityQuestion2}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Submit
        </button>
      </div>

      {isModalOpen && <SuccessModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Step4;
