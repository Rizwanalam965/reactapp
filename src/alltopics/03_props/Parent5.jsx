import React from 'react'
import Child5 from './Child5'

const Parent5 = () => {
    let [state,setState] = React.useState("")
  return (
    <div>
        <h1>Parent5 {state}</h1>
         
        <Child5 setState={setState}/>
    </div>
  )
}

export default Parent5