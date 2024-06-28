import { useReducer } from "react"

const initialState = 0;
const reducer=(state,action)=>{
if(action.type === "INCREMENT"){
  return state +1;
}
if(action.type === "DECREMENT"){
  return state-1;
}
return  state;
}
function App() {
 const [state,dispatch]= useReducer(reducer,initialState)


  return (
    <>
    <div className="container">
    <h2>Conter Using useReducer()</h2>
    <p>{state}</p>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
     
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
    </>
  )
}

export default App
