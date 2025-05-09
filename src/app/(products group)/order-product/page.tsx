"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function OrderProduct() {
    const router = useRouter()
   
    const handleClick =()=>{
        alert("Plancing Order" )
        router.push('/')
    }
  return (
    <>
    <div>OrderProduct</div>
    <button onClick ={handleClick}>Order</button>
    </>

  )
}
 