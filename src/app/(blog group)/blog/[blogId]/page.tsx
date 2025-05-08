import React from 'react'

export default async function BlogId({
    params
}:{
    params:Promise<{blogId:string}>
}) {
    const blogId = (await params).blogId
    

  
  return (
    <div>BlogId:{blogId}</div>
  )
}
