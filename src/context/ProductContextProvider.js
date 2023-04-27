import React,{useState,useEffect} from 'react';
import { createContext } from 'react';
import { getProducts } from '../services/api';
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
    return (
       <ProductsContext.Provider value={products}>
        {props.children}
       </ProductsContext.Provider>
    );
};

export default ProductContextProvider;