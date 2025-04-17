"use client"
import react, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "../functions/auth";

export default function Signup({setLogin}) {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userData = {
        username,
        email,
        password,
    }
    const handleSignup = async(e) => {
        e.preventDefault();
        try{
            const response = await signUp(email, password,userData);
            if(response.success){
                setLogin(true);
                
            }
            else{
                alert(response.message);
            }
        }
        catch(error){
            alert(error.message);
        }
    }
    return (
        <div className="flex justify-end w-full h-screen ">
        <div className="flex justify-center items-center bg-signupImg bg-contain bg-no-repeat w-[600px] h-[600px] bg-center h-screen">
        <div className="flex flex-col justify-center items-center gap-2  w-[400px] h-[500px] font-custom2 text-2xl">
            <h1 className="text-5xl font-bold">Signup</h1>
            <div className="flex flex-col w-[300px] gap-2">
                <label className="font-custom2">Username</label>
                <input type="text" className="rounded-md outline-none bg-yellow-800/30 px-2"
                       onChange={(e) => {setUsername(e.target.value)}}
                />
            </div>
           <div className="flex flex-col w-[300px] gap-2">
                <label>Email</label>
                <input type="email" className="rounded-md outline-none bg-yellow-800/30 px-2"
                        onChange={(e) => {setEmail(e.target.value)}}
                />
           </div>
           <div className="flex flex-col w-[300px] gap-2">
                <label>Password</label>
                <input type="password" className="rounded-md outline-none bg-yellow-800/30 px-2"
                        onChange={(e) => {setPassword(e.target.value)}}
                />
           </div>
           <div className="flex">
                <p>Already a member?</p>
                <button onClick={()=>setLogin(true)} className="hover:text-yellow-900">Login</button>
           </div>
            
            <button onClick={handleSignup} className="bg-yellow-800/50 hover:bg-yellow-800 rounded-md w-1/3">Signup</button>
        </div>
        </div>
        </div>
        
    );
}