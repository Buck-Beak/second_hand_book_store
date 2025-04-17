"use client"
import React, { use } from 'react'
import { useParams } from 'next/navigation'
import { useEffect,useState } from 'react';
import { readData } from '../../functions/crud';
import Link from 'next/link';

export default function BookDetails() {
    const params = useParams();
    const id = params.id;
    console.log(id);
    const [book,setBook] = useState({});
    useEffect(() => {
        const fetchBook=async()=>{
            const book = await readData("books",id);
            console.log("Book",book);
            setBook(book);
        }
        fetchBook();
    },[])
  return (
    <div className='flex flex-col justify-start items-center ml-[100px] font-custom2 w-full h-screen gap-5'>
        <h1 className='text-3xl font-bold mt-10'>Book Details</h1>
        <div className='flex flex-col bg-yellow-300 p-2 rounded-md w-3/4 justify-start items-center gap-4 mt-20'>
            <h2 className='text-2xl font-bold'>{book.bookName}</h2>
            <p>Author: {book.author}</p>
            <p>{book.summary}</p>
            <p>Price: {book.price}</p>
            <Link href = {`/user-details/${book.user}`}>User: {book.username}</Link>
            
        </div>
    </div>
    
  )
}
