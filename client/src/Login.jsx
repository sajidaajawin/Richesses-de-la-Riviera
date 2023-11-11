import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const redirectToHome = () => {
    window.location.href = "/home";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("object");
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );
      console.log(response.data);

      const user = response.data.user;
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", user.user_id);
      if (user) {
        redirectToHome();
        alert(`Welcome, ${user.username}!`);
      } else {
        console.error("User not found.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrors(error.response.data.errors);
    }
    // }
  };

  return (
    <div className="min-h-Full flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#C08261] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-white text-center">
          Login
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-[#C08261]border-[#C08261]placeholder-[#C08261]text-sm focus:outline-none focus:ring-[#C08261]focus:border-[#C08261] focus:z-10"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-[#C08261] border-blue-900 placeholder-[#C08261] text-sm focus:outline-none focus:ring-[#C08261] focus:border-[#C08261]focus:z-10"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#C08261] bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C08261]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
