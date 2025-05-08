import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
    <>
    <div className='menu'>
    <Link className='' href="/">Home</Link>
    <Link className='' href="/blog">Blog</Link>
    <Link className='' href="/metadata">Metadata</Link>
    <Link className='' href="/products">Products</Link>
    </div>

    </>
   
  )
}
