import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { productId: string }
}

// Async function to generate metadata based on route params
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = params.productId;

  const title  = await new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(`-- Product Id: ${id}`)

      ,100})
  } )

  return {
    title: `${title}`,
   
  };
};

 

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;

  return (
    <>
      {productId && <h1>Product Id: {productId}</h1>}
    </>
  );
}
