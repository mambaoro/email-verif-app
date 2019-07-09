/* eslint-disable prettier/prettier */
import * as Yup from 'yup';

const emailFormValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username should be at least 2 characters long')
    .max(30, "Username shouldn't exceed 30 characters")
    .required('username is required'),
  email: Yup.string()
    .email('This is not a valid email address')
    .min(3, 'Email should be at least 3 characters long')
    .max(100, "Username shouldn't exceed 100 characters").required('email is required'),
});

export { emailFormValidationSchema };
