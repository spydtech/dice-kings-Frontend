import React, { useState } from 'react';

const ConfirmPassword = () => {
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setError("Passwords don't match");
    } else {
      // Passwords match, proceed with your logic (e.g., API call or other actions)
      setError('');
      // Example: console.log('Password set successfully:', password);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[url('https://getwallpapers.com/wallpaper/full/3/5/d/766942-dice-wallpaper-1920x1080-hd.jpg')] bg-cover bg-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
          <h1 className="text-center text-2xl font-bold mb-6">Set Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                New Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password" // Use type="password" for password fields
                placeholder="Enter your New Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="cpassword">
                Confirm Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cpassword"
                type="password" // Use type="password" for password fields
                placeholder="Enter your Confirm Password"
                value={cpassword}
                onChange={handleCPasswordChange}
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Set Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmPassword;
