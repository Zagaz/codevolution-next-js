import React from 'react'
import Link from 'next/link'
import { Greet } from './components/Greets'



export default function home() {
  return (
    <>
    <div className='px-6'>
    <div className='bg-red-50 py-2 px-4'>Home</div>
    <Greet name="John" />
    <div className='links px-10'>


    </div>

    </div>
    </>
  )
}
