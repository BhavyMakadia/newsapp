import React, { Component } from 'react'
import spinner from './spinner.gif'

const Spinner =()=> {
  
    return (
      <div className='text-centerb'>        
        <img src={spinner} alt="loading"/>
      </div>
    )
  
}

export default Spinner