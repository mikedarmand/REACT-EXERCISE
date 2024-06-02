import { Component } from "react"
import Counter from "./Counter"
import InteractiveWelcome from "./InteractiveWelcome "
import Login from "./Login"
import MouseClicker from "./MouseClicker"
import UncontrolledLogin from "./UncontrolledLogin"



function App() {


  return (
    <>
      <h1>my handleEvents project</h1>
      <MouseClicker />
      <Login />
      <InteractiveWelcome />
      <UncontrolledLogin />
      <StrictMode><Component /> </StrictMode>
      <Counter />
      <Color/>
      <Colors const colors = {[
        {id: 1, name: 'emeka'},
        {id: 2, name: 'brown'}
    ]}/>
    </>
  )
}

export default App
