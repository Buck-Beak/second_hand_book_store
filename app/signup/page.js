"use client"
import react from "react";

export default function Signup() {
    return (
        <div className="flex justify-end w-full h-screen ">
        <div className="flex justify-center items-center bg-signupImg bg-contain bg-no-repeat w-[600px] h-[600px] bg-center h-screen">
        <div className="flex flex-col justify-center items-center gap-2  w-[400px] h-[500px] font-custom text-2xl">
            <h1 className="text-5xl font-bold">Signup</h1>
            <div className="flex flex-col w-[300px] gap-2">
                <label className="font-custom">Username</label>
                <input type="text" className="rounded-md outline-none bg-yellow-800/30 px-2"/>
            </div>
           <div className="flex flex-col w-[300px] gap-2">
                <label>Email</label>
                <input type="email" className="rounded-md outline-none bg-yellow-800/30 px-2"/>
           </div>
           <div className="flex flex-col w-[300px] gap-2">
                <label>Password</label>
                <input type="password" className="rounded-md outline-none bg-yellow-800/30 px-2"/>
           </div>
           <div className="flex">
                <p>Already a member?</p>
                <a href="/login"  className="hover:text-yellow-900">Login</a>
           </div>
            
            <button className="bg-yellow-800/50 hover:bg-yellow-800 rounded-md w-1/3">Signup</button>
        </div>
        </div>
        </div>
        
    );
}