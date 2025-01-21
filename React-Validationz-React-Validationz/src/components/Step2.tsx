// src/components/Step2.js
import React from 'react';
import { useFormik } from 'formik';
import { validationSchemaStep2 } from './formValidation';

const Step2 = ({ onNext, onPrev }:any) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '',
    },
    validationSchema: validationSchemaStep2, // Apply the validation schema
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-xs">{formik.errors.firstName}</div>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
          )}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('dateOfBirth')}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
            <div className="text-red-500 text-xs">{formik.errors.dateOfBirth}</div>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('phoneNumber')}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500 text-xs">{formik.errors.phoneNumber}</div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrev}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Back
          </button>
          {/* Make sure Next button is of type "submit" */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
