// src/components/Step3.js
import React from 'react';
import { useFormik } from 'formik';
import { validationSchemaStep3 } from './formValidation';

const Step3 = ({ onNext, onPrev }:any) => {
  const formik = useFormik({
    initialValues: { securityQuestion1: '', answer1: '', securityQuestion2: '', answer2: '' },
    validationSchema: validationSchemaStep3,
    onSubmit: (values) => onNext(values),
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Security Questions</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="securityQuestion1" className="block text-sm font-medium text-gray-700">Security Question 1</label>
          <select
            id="securityQuestion1"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('securityQuestion1')}
          >
            <option value="">Select a question</option>
            <option value="motherMaiden">What is your mother's maiden name?</option>
            <option value="petName">What is the name of your first pet?</option>
          </select>
          {formik.touched.securityQuestion1 && formik.errors.securityQuestion1 && (
            <div className="text-red-500 text-xs">{formik.errors.securityQuestion1}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="answer1" className="block text-sm font-medium text-gray-700">Answer to Question 1</label>
          <input
            id="answer1"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('answer1')}
          />
          {formik.touched.answer1 && formik.errors.answer1 && (
            <div className="text-red-500 text-xs">{formik.errors.answer1}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="securityQuestion2" className="block text-sm font-medium text-gray-700">Security Question 2</label>
          <select
            id="securityQuestion2"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('securityQuestion2')}
          >
            <option value="">Select a question</option>
            <option value="firstCar">What was your first car?</option>
            <option value="childhoodFriend">What was the name of your childhood friend?</option>
          </select>
          {formik.touched.securityQuestion2 && formik.errors.securityQuestion2 && (
            <div className="text-red-500 text-xs">{formik.errors.securityQuestion2}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="answer2" className="block text-sm font-medium text-gray-700">Answer to Question 2</label>
          <input
            id="answer2"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('answer2')}
          />
          {formik.touched.answer2 && formik.errors.answer2 && (
            <div className="text-red-500 text-xs">{formik.errors.answer2}</div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrev}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Back
          </button>
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

export default Step3;
