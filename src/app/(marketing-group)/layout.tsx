import React from 'react'

export default function MarketingLayout({ children } :{children: React.ReactNode}) {
  return (
    <>
    <h2 className='bg-yellow-100 px-4 py-2'>Marketing Header</h2>
    {children}
    <h2 className='bg-yellow-100 px-4 py-2'>Marketing Footer</h2>
    </>
  )
}
