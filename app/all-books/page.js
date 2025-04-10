"use client"
import React from 'react'
import { UserAuth } from '../context/AuthContextProvider'
import { readAllData } from '../functions/crud';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AllBooks() {
    const {user} = UserAuth();
    const [books,setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks=async()=>{
            const allBooks = await readAllData("books");
            const notUserBooks = allBooks.filter((book) => book.user!==user?.uid);
            setBooks(notUserBooks);
            console.log("Not User Books",books);
        }
        fetchBooks();
    }, [user?.uid])
  return (
    <div>
        {books.map((book,index)=>(
            <Link  key = {index} href={`/book-details/${book.id}`}>
                <div className='flex flex-col justify-center items-center bg-yellow-300 p-2 rounded-md font-custom2 w-[400px] h-[200px] m-2 ml-[100px]'>
                    <p>User: {book.username}</p>
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
