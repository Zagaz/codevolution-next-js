import React from 'react'

export default async function ProducDetails({params}: {
  params: {
    productId: string
  }
}) {
  const productId = params.productId

  return (
    <>
      {productId &&
        <h1>Product Id: {productId}</h1>
      }
    </>
  )
}
