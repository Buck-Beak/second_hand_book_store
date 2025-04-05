"use client"
import React, { use } from 'react'
import { useParams } from 'next/navigation'
import { useEffect,useState } from 'react';
import { readData } from '../../functions/crud';

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
    <div className='flex flex-col justify-center items-center ml-[100px font-custom2 '>
        <h1>Book Details</h1>
        <div className='bg-yellow-300 p-2 rounded-md w-[400px] h-[200px] m-2'>
            <h2>{book.bookName}</h2>
            <p>{book.author}</p>
            <p>{book.summary}</p>
            <p>{book.price}</p>
        </div>
    </div>
    
  )
}
