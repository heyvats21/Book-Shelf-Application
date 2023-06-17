import axios from 'axios';

import { createContext, useEffect, useState } from "react";

export const  BookContext=createContext();

export function BookProvider({children}){

    const [book,setBook]=useState([])

    const fetchBooksFunction= async()=>{
        try{
            const response= await axios.get("/api/book")
            console.log(response.data.book)
            setBook(response.data.book)
        }
        catch(error){
            console.log(error)
        }
    }


useEffect(()=>{
    fetchBooksFunction()
},[])

return(
    <BookContext.Provider value={{book}}>
        {children}
    </BookContext.Provider>
)

}