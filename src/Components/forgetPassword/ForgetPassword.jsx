import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

const ForgetPassword = () => {
    const [phone, setPhone] = useState('');
    const [otp, setOTP] = useState('');
    const [formError, setFormError] = useState('');
    // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form fields
        if (!phone || !otp) {
            setFormError('Please fill in all fields.');
            return;
        }

        // If all fields are filled, clear any previous error
        setFormError('');

        // Proceed with your form submission logic (e.g., send OTP to server)
        // For demonstration, directly navigate to '/set-new-password'
        // history.push('/set-new-password');
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-[url('https://media.licdn.com/dms/image/D4E12AQHBZIXrCsdcxA/article-cover_image-shrink_720_1280/0/1716171120163?e=2147483647&v=beta&t=IjlFByvrZTsJeELfCvczdKGLYH_yuF5MQ2LGHHi0_28')] bg-cover bg-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                    <h1 className="text-center text-2xl font-bold mb-6">Forgot Password</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="tel"
                                placeholder="Enter your Phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="otp">
                                OTP
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="otp"
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                                required
                            />
                        </div>

                        {formError && <p className="text-red-500 text-xs italic mb-4">{formError}</p>}

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgetPassword;
