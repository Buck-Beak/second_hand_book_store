"use client"
import React from 'react'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContextProvider'
import Image from 'next/image'
import { logout } from '../functions/auth'
import { useRouter } from 'next/navigation'

/*<Link href = '/post-book'>
            <Image src="" width={40} height={40}/>
        </Link>
        <Link href = '/buy-book'>
            <Image src="" width={40} height={40}/>
        </Link> */

export default function Navbar() {
    const {user} = UserAuth();
    const router = useRouter();

    const handleLogout = async() => {
        console.log("Logout clicked")
        await logout();
        router.push("/");
    }
  return (
    <nav className='flex flex-col bg-yellow-800/50 w-[100px] h-full fixed justify-center items-center p-2 gap-2'>
        <Link href = '/user'>
            <div className='flex flex-col items-center gap-1 p-2 hover:bg-yellow-300/50 rounded-md'>
                <Image src="/images/person.png" width={40} height={40} alt="user-profile"/>
                <p className='text-white font-custom2 text-xl text-center'>{user?.username || "Guest" }</p>
            </div>
        </Link>
        <Link href = '/all-books'>
            <div className='flex flex-col items-center gap-1 p-2 hover:bg-yellow-300/50 rounded-md justify-center items-center'>
                <Image src="/images/all-books.png" width={40} height={40} alt='display-all-books'/>
                <p className='text-white text-center font-custom2 text-xl'>Books</p>
            </div>
        </Link>
        <Link href = '/add-book'>
            <div className='flex flex-col items-center gap-1 p-2 hover:bg-yellow-300/50 rounded-md justify-center items-center'>
                <Image src="/images/addition.png" width={40} height={40} alt='display-all-books'/>
                <p className='text-white text-center font-custom2 text-xl'>Post Book</p>
            </div>
        </Link>
        <button onClick={handleLogout}>
            <div className='flex flex-col items-center gap-1 p-1 hover:bg-yellow-300/50 rounded-md justify-center items-center'>
                <Image src="/images/turn-off.png" width={40} height={40} alt='logout'/>
                <p className='text-white text-center font-custom2 text-xl'>Logout</p>
            </div>
        </button>
        
       
        
    </nav>
  )
}
