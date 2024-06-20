import React, { useState } from "react";
import Dice from "../../assets/dice.jpg";

const SignUp2 = () => {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!displayName) newErrors.displayName = "Display name is required.";

    if (!username) newErrors.username = "Username is required.";
    else if (username.length < 3 || username.length > 15)
      newErrors.username = "Username must be between 3 and 15 characters.";

    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    else if (!/^\d{10}$/.test(phoneNumber))
      newErrors.phoneNumber =
        "Phone number is invalid. It must be a 10-digit number.";

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

    if (!confirmPassword)
      newErrors.confirmPassword = "Confirm password is required.";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    return newErrors;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const userDetails = { displayName, username, phoneNumber, password };

      // Store user details in local storage
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      // Clear form fields after submission
      setDisplayName("");
      setUsername("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});

      alert("User registered successfully!");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div
      className="bg-gray-100 flex items-center justify-center px-6 lg:px-8"
      style={{
        backgroundImage:
          'url(https://www.bhmpics.com/downloads/ludo-king-Wallpapers/32.1492597.jpg)',
          // 'url(https://wallpapercave.com/wp/wp6905024.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
     
        height:"100%"
      }}
    >
      <div className="w-full max-w-md space-y-2 mt-4">
        <div className="bg-white shadow-md rounded-md p-6">
          <img className="mx-auto h-12 w-auto" src={Dice} alt="Dice" />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>
          <form onSubmit={onSubmitForm} className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="displayname"
                className="block text-sm font-medium text-gray-700"
              >
                Display Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="displayname"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
                {errors.displayName && (
                  <p className="text-red-500">{errors.displayName}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
            <div class="mt-4 text-center">
      <span class="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
      <a href="/login" class="text-blue-500 hover:text-blue-600">Login</a>
    </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
