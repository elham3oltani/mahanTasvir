import React,{useState,useEffect} from 'react';
import { createContext } from 'react';
import { Await } from 'react-router-dom';
import { getProducts } from '../services/api';
import api from '../services/api';
export const ProductsContext=createContext()

const ProductContextProvider = (props) => {


    const [products,setProducts]=useState([])

   useEffect(()=>{
    const fetchApi=async ()=>{
       const data=await getProducts()
setProducts(data)
    }
    fetchApi()
   },[])
   console.log(products)
    return (
       <ProductsContext.Provider value={products}>
        {props.children}
       </ProductsContext.Provider>
    );
};

export default ProductContextProvider;