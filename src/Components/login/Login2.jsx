import React, { useState } from "react";
import Dice from '../../assets/dice.jpg';

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters long.";
    else if (
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    )
      newErrors.password =
        "Password must include letters, numbers, and special characters.";

    return newErrors;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Clear form fields after submission
      setEmail("");
      setPassword("");
      setErrors({});

      alert("Login successful!");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage:
          'url(https://static.vecteezy.com/system/resources/previews/024/079/254/large_2x/3d-rotating-ludo-dice-on-black-background-free-photo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-xs m-auto bg-white rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src={Dice} alt="Dice" />
        </header>
        <form onSubmit={onSubmitForm}>
          <div>
            <label className="block mb-2 text-black" htmlFor="email">
             Phone Number
            </label>
            <input
              className="w-full p-2 mb-6 text-black border-2 border-black outline-none focus:bg-gray-300"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-2 text-black" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-black border-2 border-black outline-none focus:bg-gray-300"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div>
            <button
              className="w-full bg-black hover:bg-blue-800 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <footer>
          {/* <a
            className="text-indigo-700 hover:text-pink-700 text-sm float-left"
            href="#"
          >
            Forgot Password?
          </a> */}
          <a
            className="text-black hover:text-blue-800 text-sm float-right"
            href="/signup"
          >
            Create Account
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Login2;
