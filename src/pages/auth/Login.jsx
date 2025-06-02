import { Link, NavLink } from "react-router-dom";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import axios from "axios";
import { motion } from "framer-motion";
export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        // Jika status bukan 200, tampilkan pesan error
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        // Redirect ke dashboard jika login sukses
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>
      {errorInfo}

      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email" 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="you@example.com"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="********"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
        >
          Login
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-6 text-start flex items-center justify-center space-x-6 text-lg font-light"
        >
          <NavLink
            id="register"
            to="/register"
            className="relative text-blue-400 hover:text-blue-600 transition-colors duration-300 group"
          >
            <span className="group-hover:underline group-hover:decoration-wavy decoration-blue-300">
             Register
            </span>
            <motion.div
              layoutId="underline"
              className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 group-hover:w-full transition-all duration-500 rounded-full"
            />
          </NavLink>

          <span className="text-gray-400">|</span>

          <NavLink
            id="forgot"
            to="/forgot"
            className="relative text-pink-400 hover:text-pink-600 transition-colors duration-300 group"
          >
            <span className="group-hover:underline group-hover:decoration-wavy decoration-pink-300">
              Forget password
            </span>
            <motion.div
              layoutId="underline"
              className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-400 group-hover:w-full transition-all duration-500 rounded-full"
            />
          </NavLink>
        </motion.div>

      </form>
    </div>
  );
}
