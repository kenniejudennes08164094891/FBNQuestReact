// src/formValidation.js
import * as Yup from 'yup';

export const validationSchemaStep1 = Yup.object({
  username: Yup.string().min(4, 'Username must be at least 4 characters').required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[0-9]/, 'Password must contain a number')
    .matches(/[^a-zA-Z0-9]/, 'Password must contain a special character')
    .required('Password is required'),
});

export const validationSchemaStep2 = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    dateOfBirth: Yup.date().nullable().notRequired(),
    phoneNumber: Yup.string().matches(
      /^[0-9]{11}$/,
      'Phone Number must be a valid 11-digit number'
    ),
  });

export const validationSchemaStep3 = Yup.object({
  securityQuestion1: Yup.string().required('Please select a security question'),
  answer1: Yup.string().required('Answer is required'),
  securityQuestion2: Yup.string().required('Please select a security question'),
  answer2: Yup.string().required('Answer is required'),
});
