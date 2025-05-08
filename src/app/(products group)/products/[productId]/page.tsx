import React from 'react'

export default async function productId({
    params,
}:{
    params:Promise<{productId:string}>
}) {
    const productId = (await params).productId

  return (
    <div>productId:{productId}</div>
  )
}
