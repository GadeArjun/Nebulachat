"use client"
import { useEffect } from "react";
import {io} from "socket.io-client"

const socket = io("/");


function App() {
  
  useEffect(()=>{
    console.log(socket.id,"id")

},[socket])

  return (
    <div className="flex items-center justify-center h-screen bg-red-500">
      <h1 className="text-4xl font-bold text-white">Tailwind v4 works!</h1>
    </div>
  );
}

export default App;
