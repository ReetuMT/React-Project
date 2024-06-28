import React, { useState } from 'react'
import useTitlecount from './useTitlecount'

function Test() {
    const [count,setCount] =useState(0)
    useTitlecount(count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default Test
npm