import { Component } from "react"
import Counter from "./Counter"
import InteractiveWelcome from "./InteractiveWelcome "
import Login from "./Login"
import MouseClicker from "./MouseClicker"
import UncontrolledLogin from "./UncontrolledLogin"
import TodoList from "./TodoList "
import Welcome from "./Welcome"



function App() {


  return (
    <>
      <h1>my handleEvents project</h1>
      <MouseClicker />
      <Welcome/>
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
    <TodoList/>
    </>
  )
}

export default App
