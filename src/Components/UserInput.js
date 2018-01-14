import React from 'react'


const userInput = (props) => {
  return (
    <div>
      <p>Please enter your username : <input type='text' value={props.userName} onChange={props.changeA} /></p>
    </div>
  )
}

export default userInput