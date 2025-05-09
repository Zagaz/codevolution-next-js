import React from 'react'
import Link from 'next/link'
import { Greet } from './components/greets'
import { Person } from './components/person'




export default function home() {
  const personName={
    firstName:"Bruce",
    lastName:"Wayne"
  }


  return (
    <>
    <div className='px-6'>
    <div className='bg-red-200 py-2 px-4'>Home</div>
    
    <Greet name="John" messageCount={10} isLoggedIn={true}/>
    <Person name={personName}/>

    <div className='links px-10'>
    </div>

    </div>
    </>
  )
}
