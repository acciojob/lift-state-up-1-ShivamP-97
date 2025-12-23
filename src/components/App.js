import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const[showModal, setShowModal] = useState(false);
  function handleModal(){
    setShowModal(true);
  }
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <Child onclick={handleModal} show={showModal}/>
    </div>
  )
}

export default App