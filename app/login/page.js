"use client"
import { signIn } from "../functions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await signIn(email,password);
            console.log(response.message);
            if(response.success){
                router.push("/home")
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
            <h1 className="text-5xl font-bold">Login</h1>
           <div className="flex flex-col w-[300px] gap-2">
                <label>Email</label>
                <input type="email" className="rounded-md outline-none bg-yellow-800/30 px-2" onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div className="flex flex-col w-[300px] gap-2">
                <label>Password</label>
                <input type="password" className="rounded-md outline-none bg-yellow-800/30 px-2" onChange={(e)=>setPassword(e.target.value)}/>
           </div>
            
            <button className="bg-yellow-800/50 hover:bg-yellow-800 rounded-md w-1/3" onClick={handleLogin}>Login</button>
        </div>
        </div>
        </div>
    );
}