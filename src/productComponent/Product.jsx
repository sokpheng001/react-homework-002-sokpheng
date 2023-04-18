import ChildCard from './ChildCard';
import React, { useEffect, useState } from 'react';


const name = async()=>{
  const f = await fetch("https://api.escuelajs.co/api/v1/products");
  const g = await f.json();
  console.log(g)
}

function Product() {
  name()
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
