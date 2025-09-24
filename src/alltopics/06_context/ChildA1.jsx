import { useContext } from "react"
import { contextObject } from "./MyContext"
const ChildA1 = () => {

  let val = useContext(contextObject)
  console.log(val);//{id: 1, ename: 'John'}
  

  return (
    <div>ChildA1 {val.ename}</div>
  )
}

export default ChildA1