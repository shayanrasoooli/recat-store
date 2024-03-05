import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config';


const productContext = createContext();


function ProductProvider({children}) {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                setProducts(await api.get("/products"))
            }catch (error){
                console.log(error.message);
            }
        };

        fetchProduct();

    },[])
  return (
    <productContext.Provider value={products}>
        {children}
    </productContext.Provider>
  )
}




const useProduct = () => {
    const products = useContext(productContext)
    return products
}


const useProductDetails = id => {
    const products = useContext(productContext)
    const result = products.find((product) => product.id === id);
    return result;
}
export default ProductProvider
export {useProduct , useProductDetails}