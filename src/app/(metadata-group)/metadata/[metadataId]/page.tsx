import React from 'react'
import { notFound } from 'next/navigation';

// 0. import Metadata
import {Metadata} from 'next'


// Dynamic Metadata
//1. Declare type
type Props = {
    params:Promise<{metadataId:string}>
}

//2. generateMetadata()
export const generateMetadata = async ( {params }: Props):
 Promise<Metadata> => {
    const metadataId = (await params).metadataId
    return {
        title : `Metadata #${metadataId}`,
        description : `Description Metadata #${metadataId}`
    }

}

//3. params : props
export default async function MetadataId({params }: Props) {

// Constrain to 10
    const metadataId = (await params).metadataId

if (parseInt(metadataId) > 10) { notFound() };

  return (
    <>
    <div className='py-4 px-4'>
    <div>Metadata Id:{metadataId}</div>
    </div>
    </>
  )
}


