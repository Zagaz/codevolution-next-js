import React from 'react';

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;

  return (
    <>
      {productId && <h1>Product Id: {productId}</h1>}
    </>
  );
}
