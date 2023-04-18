import ChildCard from './ChildCard';
import React, { useEffect, useState } from 'react';


function Product() {

  const [product, setProduct] = useState([{}])
  useEffect(()=>{
    const dataFect = async ()=>{
      const data = await(
        await fetch("https://api.escuelajs.co/api/v1/products")
      ).json();
      setProduct(data);
    }
    dataFect();
  },[])
  return (
    <>
    {
      product.map((p,key)=>(<ChildCard price={p.price} src={p.images} title={p.description}></ChildCard>))
    }
    </>
  );
}
export default Product;
