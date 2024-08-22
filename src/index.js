// 1) import the react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";
// 2) get a reference to the div with id root
const el = document.getElementById('root')
// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el)
// 4) create a component
function App() {
  let message = "Hello My name is shikha"
  if (Math.random() > 0.5)
    {
        message = "Hello there"
    } 
    return (
      <h1>{new Date().toLocaleTimeString()}</h1>
    )
}
// 5) show the component on the screen
root.render(<App/>)