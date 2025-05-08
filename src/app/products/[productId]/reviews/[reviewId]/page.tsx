import React from 'react';
import { notFound } from 'next/navigation';

export default async function ProductDetails({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) { notFound() };

  return (
    <>
      {reviewId &&
        <>
          <div className='px-4 py-2'>
            <h1>Product Id: {productId} </h1>
            <h1> Review Id: {reviewId}</h1>
          </div>
        </>
      }
    </>



  )

}
