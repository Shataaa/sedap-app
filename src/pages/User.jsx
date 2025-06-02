import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setUsers(res.data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="relative p-10 min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="w-8 h-8 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full pointer-events-none fixed top-0 left-0 z-50 opacity-70"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-10"
      >
        User List
      </motion.h1>

      <div className="overflow-x-auto backdrop-blur-md rounded-3xl shadow-xl border border-white/30">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-white/20">
            <tr>
              <th className="px-6 py-4 text-left text-lg font-bold text-gray-700">Name</th>
              <th className="px-6 py-4 text-left text-lg font-bold text-gray-700">Email</th>
              <th className="px-6 py-4 text-left text-lg font-bold text-gray-700">Phone</th>
              <th className="px-6 py-4 text-left text-lg font-bold text-gray-700">City</th>
            </tr>
          </thead>
          <tbody className="bg-white/30 divide-y divide-gray-200">
            {currentUsers.map((user) => (
              <motion.tr
                key={user.id}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="hover:shadow-lg hover:backdrop-blur-lg transition-all duration-300"
              >
                <td className="px-6 py-4 text-gray-800 font-semibold">{user.firstName} {user.lastName}</td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                <td className="px-6 py-4 text-gray-600">{user.address.city}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 text-white rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-40"
        >
          Prev
        </button>
        <span className="text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 text-white rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
