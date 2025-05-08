import React from 'react'

export default async function CommentsId({
    params,
}: {
    params: Promise<{ blogId: string; commentsId: string }>
}) {
    const { blogId, commentsId } = await params


    return (
        <>
            <div  className='py-2 px-4'>
                <div>Comments Id{blogId}</div>
                <div>Comments Id{commentsId}</div>
            </div>
        </>
    )
}
