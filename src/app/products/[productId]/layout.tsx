import React from 'react'

export default function ProductsDetailsLayout({ children } :{children: React.ReactNode}) {
  return (
    <>
    
    <h2>Featured Products</h2>
    {children}
    </>
  )
}
