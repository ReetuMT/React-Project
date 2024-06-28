// import React, { useState ,useEffect} from 'react';
// import './App.css';
// import ToDo from './Component/ToDo';
// import ToDolist from './Component/ToDolist';
// function App() {
//   const initialState = JSON.parse(localStorage.getItem("todo")) || [];
//   const [input, setInput] = useState('');
//   const [todo, setTodo] = useState(initialState);
//   const [todoedit, setEditlist] = useState(null);


//   return (

//     <div className='main_todo'>
//       <ToDo 
//         input={input} 
//         setInput={setInput} 
//         todo={todo} 
//         setTodo={setTodo} 
//         todoedit={todoedit} 
//         setEditlist={setEditlist} 
//       />
//       <ToDolist 
//         todo={todo} 
//         setTodo={setTodo} 
//         setEditlist={setEditlist} 
//       />
    
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Productlist from './Component/Productlist'


function App() {
  return (
    <Productlist/>
  
  )
}

export default App
