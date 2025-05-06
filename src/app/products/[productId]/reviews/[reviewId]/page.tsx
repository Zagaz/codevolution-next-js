import React from 'react';

export default async function ProductDetails({ params }: { params: Promise<{ reviewId: string }> }) {
  const { reviewId } = await params;

  return (
    <>
      {reviewId && <h1>Review Id: {reviewId}</h1>}
    </>
  );
}
