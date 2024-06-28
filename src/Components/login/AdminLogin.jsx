import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Dice from '../../assets/dice.jpg';
import Login from "../../assets/login.svg"

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
    const onSubmitForm = async (event) => {
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

    return (
        <div className="flex md:flex-row flex-col justify-center items-center mt-16">
            <div className="w-full max-w-xl m-auto">
                <img src={Login} alt="Login" />
            </div>
            <div className="w-full max-w-xs m-auto bg-[#0d3b66] rounded p-5">
                <header>
                    <img className="w-20 mx-auto mb-5" src={Dice} alt="Dice" />
                </header>
                <form onSubmit={onSubmitForm}>
                    <div>
                        <label className="block mb-2 text-white" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-2 mb-6 text-black border-2 border-black outline-none"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-white" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-2 mb-6 text-black border-2 border-black outline-none"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>
                    {serverError && <p className="text-red-500">{serverError}</p>}
                    <div>
                        <button
                            className="w-full bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-6 rounded"
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
    );
};

export default AdminLogin;
