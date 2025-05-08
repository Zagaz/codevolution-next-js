import React from 'react'

export default function ProductsDetailsLayout({ children } :{children: React.ReactNode}) {
  return (
    <>
    <h2 className='bg-blue-100 px-4 py-2'>Featured Products Header</h2>
    {children}
    <h2 className='bg-blue-100 px-4 py-2'>Featured Products Footer</h2>
    </>
  )
}
