import React from 'react'

export default function BlogLayout({ children } :{children: React.ReactNode}) {
  return (
    <>
    <h2 className='bg-purple-100 px-4 py-2'>Blog Header</h2>
    {children}
    <h2 className='bg-purple-100 px-4 py-2'>Blog Footer</h2>
    </>
  )
}
