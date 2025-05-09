import React from 'react'

type Props={
  name:string
}


export const Greet = (props:Props) => {
  return (
    <>
    <div>Hello, {props.name} from Greet component</div>
    </>
  )
}
