"use client"
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { readData } from '../../functions/crud';
import { useEffect} from 'react';
import { readAllData } from '../../functions/crud';
import Link from 'next/link';

export default function userDetails() {
    const params = useParams();
    const id = params.id;
    console.log(id);

    const [user,setUser] = useState({});
    const [books,setBooks] = useState([]);
    const [numberPosts,setNumberPosts] = useState(0);

    useEffect(() => {
        const fetchUser=async()=>{
            const user = await readData("users",id);
            console.log("User",user);
            setUser(user);
            const allBooks = await readAllData("books");
            const books = allBooks.filter((book) => book.user==id);
            setBooks(books);
            setNumberPosts(books.length);
        }
        fetchUser();
    },[id])
  return (
    <div className='flex flex-col justify-start items-center ml-[100px] font-custom2 w-full h-screen gap-5'>
        <h1 className='text-3xl font-bold mt-10'>User Details</h1>
        <div className='flex flex-col bg-yellow-300 p-2 rounded-md w-3/4 justify-start items-center gap-4 mt-20'>
            <h2 className='text-2xl font-bold'>Name: {user.username}</h2>
            <p>Posts: {numberPosts}</p>
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
