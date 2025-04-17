"use client"
import { readAllData } from '../functions/crud';
import React, { use } from 'react'
import { UserAuth } from '../context/AuthContextProvider'
import { useState,useEffect } from 'react';
import Link from 'next/link';

export default function userProfile() {
    const {user} = UserAuth();
    const [books,setBooks] = useState([]); 
    console.log(user?.uid); 
    useEffect(() => {
        const fetchPosts=async()=>{
            const allBooks = await readAllData("books");
            const books = allBooks.filter((book) => book.user==user?.uid);
            setBooks(books);
        }
        fetchPosts();
    },[user?.uid])
    
  return (
    <div className='flex flex-col justify-start items-center ml-[100px] font-custom2 w-full h-screen gap-5'>
        <h1 className='text-3xl font-bold mt-10'>User Details</h1>
        <div className='flex flex-col bg-yellow-300 p-2 rounded-md w-3/4 justify-start items-center gap-4 mt-20'>
            <h2 className='text-2xl font-bold'>Name: {user?.username}</h2>
        </div>
        {books.map((book,index)=>(
            <Link  key = {index} href={`/book-details/${book.id}`}>
                <div className='flex flex-col justify-center items-center bg-yellow-800/50 p-2 rounded-md font-custom2 w-[400px] h-[200px] m-2 ml-[100px]'>
                    <h1>Book Name: {book.bookName}</h1>
                    <h2>Author: {book.author}</h2>
                    <p>Preview: {book.summary.substring(0,100)+"...."}</p>
                    <p>Price: {book.price}</p>
                </div>
            </Link>
        ))}
    </div>
  )
}
