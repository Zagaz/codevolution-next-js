import React from 'react'
import Link from 'next/link'
import LinkGen from '@/app/components/linkgen'

export default function ProductList() {
  return (
    <>
      <div className='px-4 py-2'>
        <h1>ProductList</h1>
        <Link href='/products/1'>Prodcuct 1</Link>
        <Link href='/products/2'>Prodcuct 2</Link>
        <Link href='/products/3'>Prodcuct 3</Link>
        
      </div>

    </>
  )
}
