import React from 'react'

export default function ProductReview({params}:{params:{reviewId:string}}) {
    const reviewId  = params.reviewId;
  
  return (
    <>
    {
      reviewId ? <h2>Review Id:{reviewId}</h2>:
      <h2>No review with respected id</h2>
    }
    </>
  )
}
