import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();

    // Function to validate form fields
    const validateForm = () => {
        const newErrors = {};
        if (!email.trim()) newErrors.email = "Email is required.";
        if (!password.trim()) newErrors.password = "Password is required.";
        return newErrors;
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await axios.post(
                    "http://localhost:8000/admin/login", // Adjust API endpoint
                    { email, password },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                // Assuming login is successful
                if (response.data.token) {
                    localStorage.setItem("adminToken", response.data.token);
                    navigate("/admin"); // Redirect to admin dashboard or desired route
                } else {
                    setServerError("Invalid credentials. Please try again.");
                }
            } catch (error) {
                if (error.response && error.response.data) {
                    setServerError(error.response.data.message);
                } else {
                    setServerError("Failed to login. Please try again.");
                }
            }
        } else {
            setErrors(formErrors);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    return (
        <>
            <div className="dark:bg-gradient-to-l from-gray-900 to-gray-600 flex justify-center items-center w-screen h-screen p-5">
                <div className="bg-white shadow-md dark:shadow-gray-600 rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/3 dark:bg-gray-800">
                    <h1 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-200">
                        Admin Login
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                id="password"
                                type="password"
                                placeholder="******"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                        {serverError && <p className="text-red-500">{serverError}</p>}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-green-600"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <footer>
                        <Link
                            className="text-white hover:text-pink-700 text-sm float-left"
                            to="/forget-password"
                        >
                            Forgot Password?
                        </Link>
                        <Link
                            className="text-white hover:text-pink-700 text-sm float-right"
                            to="/signup"
                        >
                            Player Login
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default AdminLogin