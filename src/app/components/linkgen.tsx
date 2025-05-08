import React from 'react'
import Link from 'next/link'

export default function LinkGen(slug:string, value:string) {
    
  return (
    <Link href={slug}>{value}</Link>
  )
}
