import React from 'react'



export default function BlogLayout({ children } :{children: React.ReactNode}) {
  console.log(children)
  return (
    <>
    <h2 className='bg-indigo-100 px-4 py-2'>Metadata Header</h2>
    {children}
    <h2 className='bg-indigo-100 px-4 py-2'>Metadata Footer</h2>
    </>
  )
}
