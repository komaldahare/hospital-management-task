import React, { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  const validate = () => {
    const { email, password } = values;
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      // Perform login logic here
      console.log('Login successful');
      setValues({});
      setTouched({});
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return { values, touched, errors, handleChange, handleBlur, handleSubmit };
};

const LoginForm = () => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useForm();

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3 p-8 bg-white rounded shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} rounded py-2 px-3 focus:outline-none focus:border-blue-500`}
            value={values.email || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.email && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`w-full border ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'} rounded py-2 px-3 focus:outline-none focus:border-blue-500`}
            value={values.password || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.password && errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:
          shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default LoginForm;