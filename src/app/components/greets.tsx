import React from 'react'

type Props={
  name:string ,
  messageCount:number
  isLoggedIn : boolean
}


export const Greet = (props:Props) => {
  return (
    <>
    {props.isLoggedIn ?
      <>
      <h3>Hello from Greet component</h3>
    <h3>Welcome {props.name}!</h3>
    <h3>You have: {props.messageCount} messages!</h3>
      </>:
      <>
      <h3>You shall not pass!</h3>
      </>

    }
    
    </>
  )
}
