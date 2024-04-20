import axios from './Axios'
import React, { createContext, useEffect, useState } from 'react'

export const productContext =  createContext()

function Context(props) {
    // const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

    localValue = localStorage.getItem("products")
if (!localValue) { 
    localStorage.setItem([])
    localValue = "[]"
}

const [products, setproducts] = useState( JSON.parse(localValue) )

    // const getProducts = async ()=>{
    //     try{
    //         const {data} = await axios("/products")
    //         setproducts(data)
    //     }catch(e){
    //         console.log(e);
    //     }
    // }

    // useEffect(()=>{
    //     getProducts()
    // },[])

  return (
    <productContext.Provider value={[products, setproducts]}>
        {props.children}
    </productContext.Provider>
  )
}

export default Context