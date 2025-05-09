import { use } from 'react'
import Link from 'next/link'
import React from 'react'

export default  function NewsArticle({
  params,searchParams
}:{
    params:Promise<{articleId:string}>,
    searchParams: Promise<{lang?: "en" | "fr"}> ;  
  }) {
  
    const {articleId} = use( params )
    const {lang = 'en'} = use ( searchParams )
    
  return (
    <>
    <div>News Article {articleId}</div>
    <p>Reading in {lang}</p>
    <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link> 
    </div>
    </>
  )
}
