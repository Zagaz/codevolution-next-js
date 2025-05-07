import React from 'react'
import '../src/input.css';
import '../public/output.css';



export default function ProductsDetailsLayout({ children } :{children: React.ReactNode}) {
  return (
    <>
    
    <h2>Featured Products</h2>
    {children}
    </>
  )
}
