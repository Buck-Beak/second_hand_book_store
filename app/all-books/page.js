"use client"
import React from 'react'
import { UserAuth } from '../context/AuthContextProvider'
import { readAllData } from '../functions/crud';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AllBooks() {
    const {user} = UserAuth();
    const [books,setBooks] = useState([]);
    const [searchItem,setSearchItem] = useState("");
    useEffect(() => {
        const fetchBooks=async()=>{
            const allBooks = await readAllData("books");
            const notUserBooks = allBooks.filter((book) => book.user!==user?.uid);
            setBooks(notUserBooks);
           
            console.log("Not User Books",books);
        }
        fetchBooks();
    }, [user?.uid])

    const filteredBooks = books.filter((book) => {
        const bookName = book.bookName.toLowerCase().includes(searchItem.toLowerCase());
        const author = book.author.toLowerCase().includes(searchItem.toLowerCase());
        const username = book.username.toLowerCase().includes(searchItem.toLowerCase());
        return bookName || author || username;
    }
    );
  return (
    <div className='flex flex-col justify-start items-center font-custom2 w-full h-screen gap-5'>
        <h1 className='text-3xl font-bold font-custom2 mt-10'>All Books</h1>

        <div className='flex justify-center items-center gap-2 bg-yellow-800/50 p-2 rounded-md'>
            <Image src="/images/search.png" width={40} height={40} alt="search button"/>
            <input type="text" value = {searchItem}
            placeholder="Search by book name, author, or username"
            onChange={(e)=>setSearchItem(e.target.value)} 
            className='border-none outline-none w-[400px] h-[40px] rounded-md p-2 bg-yellow-800/50 placeholder:text-black font-custom2 focus:placeholder:text-yellow-800/30'
            />
        </div>

        <div className='flex flex-wrap px-10 justify-center items-start'>
            {filteredBooks.map((book,index)=>(
                <Link  key = {index} href={`/book-details/${book.id}`}>
                    <div className='flex flex-col justify-center items-center bg-yellow-800/50 p-2 rounded-md font-custom2 w-[400px] h-[200px] m-2 '>
                        {book.picture && <Image src={book.picture} width={100} height={100} alt="book-cover" className='rounded-md'/>}
                        <p>User: {book.username}</p>
                        <h1>Book Name: {book.bookName}</h1>
                        <h2>Author: {book.author}</h2>
                        <p>Preview: {book.summary.substring(0,100)+"...."}</p>
                        <p>Price: {book.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    
    
  )
}
