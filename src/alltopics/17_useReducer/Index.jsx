import  { useReducer,reducer } from "react";
import style from "./index.module.css"

export const ReducerComp=()=>{
    const reducer= (state ,action)=>{
        console.log(state,action);
        if(action.type=== "INCREMENT"){
            return state+1
        }
        if(action.type=== "DECREMENT"){
            return state-1
        }
    }


    const [state, dispatch] = useReducer(reducer ,0);
    console.log(useReducer(reducer,0));
    
    return (
        <div className="container">
            <h1>{state} </h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button> <br />
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        </div>
    )
}

export default ReducerComp;