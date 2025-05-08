import React from 'react'

export default async function BlogId({
    params,
}:{
    params: Promise<{blogId: string}>
}) {
    const blogId = (await params).blogId;
  return (
    <>
    <div className = 'py-2 px-4'>
        <h3>BlogId:{blogId} </h3>
        </div>
    </>
  )
}
