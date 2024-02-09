'use client'

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Home() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted with data:', formData);
  };

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear error when user types
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format.',
      }));
      return;
    }

    // Validate password complexity (add your own constraints)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long and contain at least one letter and one number.',
      }));
      return;
    }

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match.',
      }));
      return;
    }

    // If all validations pass, proceed with further actions (e.g., submit the form)
    // ...

    // Clear form data after submission
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <div className="fixed top-0 left-0 w-full text-black p-4">
        <Navbar />
      </div>
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Your other content goes here */}
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
        <form onSubmit={handleSignUp} className="flex flex-col items-center">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="mb-4 p-2"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="mb-4 p-2"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 p-2"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="mb-4 p-2"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            className="mb-4 p-2"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            className="mb-4 p-2"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`mb-4 p-3 rounded-md border ${errors.password && 'border-red-500 focus:border-red-500'}`}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={`mb-4 p-3 rounded-md border ${errors.confirmPassword && 'border-red-500 focus:border-red-500'}`}
            onChange={handleChange}
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            submit
          </button>
        </form>
      </div>

    </main>
  );
}
