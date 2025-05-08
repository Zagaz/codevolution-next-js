import React from 'react'

export default async function MetadataId({
    params,}:{
        params:Promise<{metadataId:string}>
    }) {

const metadataId = (await params).metadataId

  return (
    <>
    <div className='py-4 px-4'>
    <div>Metadata Id:{metadataId}</div>
    </div>
    </>
  )
}


