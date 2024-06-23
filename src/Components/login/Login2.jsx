import { useState } from "react";
import axios from "axios";
import Dice from '../../assets/dice.jpg';
import { useNavigate } from "react-router-dom";
import Login from "../../assets/login.svg"
const Login2 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    else if (!/^\d{10}$/.test(phoneNumber)) newErrors.phoneNumber = "Phone number is invalid.";

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

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8000/api/v1/login", {
          phoneNumber,
          password,
        });

        if (response.data.success) {
          // Clear form fields after submission
          setPhoneNumber("");
          setPassword("");
          setErrors({});
          setServerError("");
          navigate("/home");
        } else {
          setServerError(response.data.message);
        }
      } catch (error) {
        setServerError("Failed to login. Please try again.");
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex md:flex-row flex-col justify-center items-center mt-16">
    <div className="w-full max-w-xl m-auto">
      <img  src= {Login}/>
    </div>
      <div className="w-full max-w-xs m-auto bg-[#0d3b66] rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src={Dice} alt="Dice" />
        </header>
        <form onSubmit={onSubmitForm}>
          <div>
            <label className="block mb-2 text-white" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="w-full p-2 mb-6 text-black border-2 border-black outline-none"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
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
          <a
            className="text-white hover:text-blue-800 text-sm float-right"
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



// import { useState } from "react";
// import axios from "axios";
// import Dice from '../../assets/dice.jpg';
// import { useNavigate } from "react-router-dom";

// const Login2 = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [serverError, setServerError] = useState("");
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};

//     if (!phoneNumber) newErrors.phoneNumber = "Phone number is required.";
//     else if (!/^\d{10}$/.test(phoneNumber)) newErrors.phoneNumber = "Phone number is invalid.";

//     if (!password) newErrors.password = "Password is required.";
//     else if (password.length < 8)
//       newErrors.password = "Password must be at least 8 characters long.";
//     else if (
//       !/[A-Z]/.test(password) ||
//       !/[0-9]/.test(password) ||
//       !/[!@#$%^&*]/.test(password)
//     )
//       newErrors.password =
//         "Password must include letters, numbers, and special characters.";

//     return newErrors;
//   };

//   const onSubmitForm = async (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       try {
//         const response = await axios.post("http://localhost:8000/login", {
//           phoneNumber,
//           password,
//         });

//         if (response.data.success) {
//           // Clear form fields after submission
//           setPhoneNumber("");
//           setPassword("");
//           setErrors({});
//           setServerError("");
//           navigate("/home");
//         } else {
//           setServerError(response.data.message);
//         }
//       } catch (error) {
//         setServerError("Failed to login. Please try again.");
//       }
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   return (
//     <div
//       className="flex h-screen"
//       style={{
//         backgroundImage:
//           'url(https://static.vecteezy.com/system/resources/previews/024/079/254/large_2x/3d-rotating-ludo-dice-on-black-background-free-photo.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="w-full max-w-xs m-auto bg-white rounded p-5">
//         <header>
//           <img className="w-20 mx-auto mb-5" src={Dice} alt="Dice" />
//         </header>
//         <form onSubmit={onSubmitForm}>
//           <div>
//             <label className="block mb-2 text-black" htmlFor="phoneNumber">
//               Phone Number
//             </label>
//             <input
//               className="w-full p-2 mb-6 text-black border-2 border-black outline-none focus:bg-gray-300"
//               type="text"
//               name="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//             {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
//           </div>
//           <div>
//             <label className="block mb-2 text-black" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="w-full p-2 mb-6 text-black border-2 border-black outline-none focus:bg-gray-300"
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <p className="text-red-500">{errors.password}</p>}
//           </div>
//           {serverError && <p className="text-red-500">{serverError}</p>}
//           <div>
//             <button
//               className="w-full bg-black hover:bg-blue-800 text-white font-bold py-2 px-4 mb-6 rounded"
//               type="submit"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <footer>
//           <a
//             className="text-black hover:text-blue-800 text-sm float-right"
//             href="/signup"
//           >
//             Create Account
//           </a>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Login2;