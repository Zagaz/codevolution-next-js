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
    <div className='px-4 py-2'>
    <h1>404</h1>
    </div>
    </>

  )
}
