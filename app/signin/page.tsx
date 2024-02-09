'use client'
// Import necessary dependencies
import { useState } from 'react';
import Navbar from '../../components/Navbar';

// Create the Signin component
export default function Signin() {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State to manage errors
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Function to handle form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Signin submitted with data:', formData);
    // Reset form data
    setFormData({
      email: '',
      password: '',
    });
  };

  // Function to handle input changes
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <div className="fixed top-0 left-0 w-full text-black p-4">
          <Navbar />
        </div>
       
        <div>
          <h1 className="text-4xl font-bold mb-8">Sign In</h1>
          <form onSubmit={handleSignIn} className="flex flex-col items-center">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`mb-4 p-2 rounded-md border ${errors.email && 'border-red-500 focus:border-red-500'}`}
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`mb-4 p-3 rounded-md border ${errors.password && 'border-red-500 focus:border-red-500'}`}
              onChange={handleChange}
              value={formData.password}
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
              Sign In
            </button>
          </form>
        </div>
    
    </main>
  );
}
