import React from 'react'
import { Welcome } from './Welcome'

export const App = () => {
    let user;

  return (
    <div>
       {!user ? <button>Login</button> : <Welcome nama={user}/>}
    </div>
  )
  
}