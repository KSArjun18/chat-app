import { io } from "socket.io-client";
import React from "react";
const SOCKET_URL = "https://chat-app-backend-9daw.onrender.com";
export const socket = io(SOCKET_URL);
// app context
<<<<<<< HEAD
export const AppContext = React.createContext(); 
=======
export const AppContext = React.createContext();
>>>>>>> c00c3ef0bdc9f6823eceea15284b1c4f646c1b4b
