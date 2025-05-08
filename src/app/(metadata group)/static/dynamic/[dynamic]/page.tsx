import React from 'react'

type Props = {
  params: {
    id: string
  }
}

export default function DynamicData({ params }: Props) {
  return (
    <div>
      <h2>Dynamic Data</h2>
      <p>Parâmetro da URL: <strong>{params.id}</strong></p>
    </div>
  )
}
