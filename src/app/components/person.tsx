import React from 'react'

type PersonProps={
  name:{
    firstName:string,
    lastName:string
  }
}

export const Person = (props:PersonProps) => {
  return (
    <div className='bg-yellow-100'>Person Name: {props.name.firstName} {props.name.lastName}</div>
  )
}
 