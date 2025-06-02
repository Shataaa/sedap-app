import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function Forgot() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
        Forgot Your Password?
      </h2>

      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>

      <form>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
        >
          Send Reset Link
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-6 text-start flex items-center justify-center space-x-6 text-lg font-light"
        >
          <NavLink
            id="login"
            to="/login"
            className="relative text-blue-400 hover:text-blue-600 transition-colors duration-300 group"
          >
            <span className="group-hover:underline group-hover:decoration-wavy decoration-blue-300">
              Login
            </span>
            <motion.div
              layoutId="underline"
              className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 group-hover:w-full transition-all duration-500 rounded-full"
            />
          </NavLink>

          <span className="text-gray-400">|</span>

          <NavLink
            id="register"
            to="/register"
            className="relative text-pink-400 hover:text-pink-600 transition-colors duration-300 group"
          >
            <span className="group-hover:underline group-hover:decoration-wavy decoration-pink-300">
              Register
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
