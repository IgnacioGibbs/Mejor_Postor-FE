import React from "react";
import ProductDetail from "./ProductDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () =>{
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState({});
    const {_id} = useParams();
    const URL = "http://localhost:4000/api/products";
    

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setData(data.products);
            });
    }, []);

   useEffect(() => {
       if(data.length > 0){
            const productDetail = data.filter(item=> item._id === _id);
            setDetail(...productDetail);
       }
   }, [data, _id])

    
        

    return(
      <>
         <ProductDetail detail={detail} /> 
      </>  
    );
};

export default ProductDetailContainer;