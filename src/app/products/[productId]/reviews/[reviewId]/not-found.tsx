"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
export default function NotFound() {
    const pathname = usePathname()
    const productId = pathname.split('/')[2]
    const reviewId  = pathname.split('/')[4]

  console.log(pathname)
  return (
    <>
    <h1>404</h1>
    <div>Product: {productId}</div>
    <div>Review {reviewId}</div>
    </>

  )
}
