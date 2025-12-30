// "use client"

import { useState } from "react"
import { IoPersonCircleOutline, IoChatbubbleEllipsesOutline, IoLogOutOutline } from "react-icons/io5"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { useChat } from "../context/ChatContext";
import SearchBar from "./SearchBar";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();
  const { logout } = useAuth()
  const { totalUnreadCount } = useChat();

  const handleProfile = () => {
    navigate("/profile")
  }

  const handleChat = () => {
    navigate("/chat")
  }

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-50 to-violet-100 shadow-lg border border-violet-200 px-4 py-3 rounded-2xl m-2 md:m-4 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-violet-800 font-bold text-xl">
            <div className="bg-violet-200 p-2 rounded-full">
              <span className="text-2xl">🌾</span>
            </div>
            <span className="hidden sm:block">KisanConnect</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-all duration-300 font-medium ${isActive
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-violet-700 hover:bg-violet-200 hover:text-violet-800"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/crops"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-all duration-300 font-medium ${isActive
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-violet-700 hover:bg-violet-200 hover:text-violet-800"
                }`
              }
            >
              Crops
            </NavLink>

          </div>

          <div className="flex items-center space-x-4">
            <div className="w-32 sm:w-48 md:w-56 lg:w-64">
              <SearchBar
                placeholder="Search users..."
              />
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={handleProfile}
                title="Profile"
                className="p-2 text-violet-700 hover:bg-violet-200 rounded-full transition-all duration-300 hover:scale-110"
              >
                <IoPersonCircleOutline className="text-2xl" />
              </button>
              <button
                onClick={handleChat}
                title="Chat"
                className="relative p-2 text-violet-700 hover:bg-violet-200 rounded-full transition-all duration-300 hover:scale-110"
              >
                <div className="relative">
                  <IoChatbubbleEllipsesOutline className="text-2xl" />
                  {totalUnreadCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {totalUnreadCount}
                    </span>
                  )}
                </div>
              </button>
              <button
                onClick={handleLogout}
                title="Logout"
                className="px-3 py-2 text-rose-600 hover:bg-rose-100 rounded-full transition-all duration-300 font-medium text-sm flex items-center gap-2"
              >
                <IoLogOutOutline className="text-lg" />
                Logout
              </button>
            </div>

            <button
              className="lg:hidden p-2 text-violet-700 hover:bg-violet-200 rounded-full transition-all duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-violet-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-violet-700 transition-all duration-300 mt-1 ${menuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-violet-700 transition-all duration-300 mt-1 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="flex flex-col space-y-2 py-4 border-t border-violet-200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? "bg-violet-600 text-white shadow-md" : "text-violet-700 hover:bg-violet-200"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/crops"
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? "bg-violet-600 text-white shadow-md" : "text-violet-700 hover:bg-violet-200"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Crops
            </NavLink>

          </div>

          <div className="flex flex-col space-y-2 py-4 border-t border-violet-200">
            <button
              onClick={() => {
                handleProfile()
                setMenuOpen(false)
              }}
              className="flex items-center space-x-3 px-4 py-3 text-violet-700 hover:bg-violet-200 rounded-xl transition-all duration-300"
            >
              <IoPersonCircleOutline className="text-2xl" />
              <span className="font-medium">Profile</span>
            </button>
            <button
              onClick={() => {
                handleChat();
                setMenuOpen(false);
              }}
              className="flex items-center space-x-3 px-4 py-3 text-violet-700 hover:bg-violet-200 rounded-xl transition-all duration-300"
            >
              <div className="relative">
                <IoChatbubbleEllipsesOutline className="text-2xl" />
                {totalUnreadCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-amber-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                    {totalUnreadCount}
                  </span>
                )}
              </div>
              <span className="font-medium">Chat</span>
            </button>
            <button
              onClick={() => {
                handleLogout()
                setMenuOpen(false)
              }}
              className="flex items-center space-x-3 px-4 py-3 text-rose-600 hover:bg-rose-100 rounded-xl transition-all duration-300"
            >
              <IoLogOutOutline className="text-2xl" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
