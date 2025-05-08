import React from 'react';
import { Metadata } from 'next';

// Async function to generate metadata based on route params
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;
  const id = resolvedParams.productId;

  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`-- Product Id: ${id}`);
    }, 100);
  });

  // dynamic metadata

  

  return {
    title,
  };
};

// Product page component
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <>
      {productId && <h1>Product Id: {productId}</h1>}
    </>
  );
}
