"use client"
import React, { use, useState } from 'react'
import { createData } from '../functions/crud';
import { UserAuth } from '../context/AuthContextProvider';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function AddBook() {
    const {user} = UserAuth();
    const [bookName,setBookName] = useState('');
    const [author,setAuthor] = useState('');
    const [summary,setSummary] = useState('');
    const [price,setPrice] = useState('');
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

    const generateSummary=async()=>{
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
            // Set the `responseMimeType` to output JSON
            generationConfig: { responseMimeType: "application/json" }});
        const result = await model.generateContent(
                `Give a short and crisp 2-3 sentence *preview* of the book "${bookName}" written by "${author}". Only return the preview text.`
              );        
        console.log("Result:",result);
        const response = await result.response;
        const text = await response.text();
        console.log("Raw API Response:", text); // Check the exact response

        let parsedData;
        try {
            parsedData = JSON.parse(text);
        } catch (error) {
            console.error("JSON Parse Error:", error);
            return;
        }

       console.log("Parsed JSON:", parsedData);

        setSummary(parsedData[0].preview);
        console.log("Summary",summary);
    }


    const handlePost=async()=>{
        try{
            if(price>400){
                alert("Price cannot be kept greater than 400");
            }
            else{
                const data = {bookName:bookName,author:author,summary:summary,price:price,user:user?.uid,username:user?.username}
                await createData("books",data);
            }
            
        }
        catch(error){
            alert(error.message);
        }
    }
  return (
    <div className='flex flex-col justify-center items-center font-custom2 text-4xl gap-2'>
      <h1>Add new book</h1>
      <div className='flex flex-col gap-2'>
        <label htmlFor="book-name">Name of Book</label>
        <input type="text" className='outline-none bg-yellow-800/30 rounded-md px-2 py-2' onChange={(e)=>setBookName(e.target.value)}/>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="author">Author</label>
        <input type="text" className='outline-none bg-yellow-800/30 rounded-md px-2 py-2' onChange={(e)=>setAuthor(e.target.value)}/>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="summary">Summary</label>
        <textarea type="text" value = {summary} className='outline-none bg-yellow-800/30 rounded-md px-2 py-2' onChange={(e)=>setSummary(e.target.value)} />
        <button className="bg-yellow-800/50 hover:bg-yellow-800 rounded-md text-xl" onClick={generateSummary}>Get summary from web</button>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="book-price">Price of Book</label>
        <input type="number" className='outline-none bg-yellow-800/30 rounded-md px-2 py-2' onChange={(e)=>setPrice(e.target.value)} />
      </div>
      <div className='flex flex-col w-[100px] h-[100px]'>
        <button className="bg-yellow-800/50 hover:bg-yellow-800 rounded-md" onClick={handlePost}>POST</button>
      </div>
    </div>
  )
}
