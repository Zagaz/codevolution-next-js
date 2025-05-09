import React from 'react'
import Link from 'next/link'




export default function home() {
  const personName={
    firstName:"Bruce",
    lastName:"Wayne"
  }


  return (
    <>
    <div className='px-6'>
    <div className='py-2 px-4'>Home</div>
    <div className='py-2 px-4'>Articles</div>
    <Link href='/products'>Products</Link><br />
    <Link href= '/blog'>Blog</Link><br />
    <Link href='/articles/breaking-news-123?lang=en'>Read English 🇺🇸</Link><br />
    <Link href='/articles/breaking-news-123?lang=fr'>Read freanch 🇫🇷</Link><br />









   

    </div>
    </>
  )
}
