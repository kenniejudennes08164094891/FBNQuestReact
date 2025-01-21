// src/components/Step1.js
import React from 'react';
import { useFormik } from 'formik';
import { validationSchemaStep1 } from './formValidation';

const Step1 = ({ onNext, onPrev }:any) => {
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: validationSchemaStep1,
    onSubmit: (values) => onNext(values),
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Account Information</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            id="username"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username && (
            <div className="text-red-500 text-xs">{formik.errors.username}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-xs">{formik.errors.password}</div>
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

export default Step1;
