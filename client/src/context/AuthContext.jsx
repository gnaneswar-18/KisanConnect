import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../utils/api"; // Your axios instance with withCredentials: true
import {io} from "socket.io-client";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isFarmer, setIsFarmer] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/api/v1/users/current-user"); 
        if (data.success) {
          setUser(data.data.user);
          connectSocket(data.data.user);
          console.log(data.user)
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoadingAuth(false);
      }
    })();
  }, []);

  const register = async (payload) => {
   
    try {
      const  { data } = await api.post("/api/v1/users/register", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success){
         handleAuthSuccess(data.data.user)
        }
        else toast.error(data.message);
      return data.success
    } catch (error) {
      const message =
      error?.response?.data?.message || 
      error?.message ||                 
      "Something went wrong";
       toast.error(message);
    }
  };

  const login = async (payload) => {
    try {
      const { data: res } = await api.post("/api/v1/users/login",
        {
        email: payload.email, 
        password: payload.password
      });
      
      if(res.success){
        handleAuthSuccess(res.data.user);
        return res.data.user;
      }
      else {
        toast.error(res.message);
        return null;
      }
      
    } catch (err) {
      toast.error(err.message);
      return null;
    }
  };

  const logout = async () => {
    try {
      const response  = await api.post("/api/v1/users/logout");
      toast.success(response?.data?.message);
    } catch(error){
      toast.error("Log out failed");
      console.error(error.message);
    } 
    finally {
      setUser(null);
      setIsFarmer(false);
    }
  };


  const connectSocket = (userData) => {
       if (!userData || socket?.connected || !backendUrl) return;

       const newSocket = io(backendUrl, {
        query: {
          userId: userData._id,
        }
       });
       newSocket.connect();
       setSocket(newSocket);

       newSocket.on("getOnlineUsers", (userId) => {
        setOnlineUsers(userId);
       })
  }

  const handleAuthSuccess = (u) => {
    setUser(u);
    toast.success("Welcome to AgroConnect!");
    connectSocket(u);
  };

  return (
    <AuthContext.Provider
      value={{ user, isFarmer, loadingAuth, login, register, logout, socket, onlineUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};