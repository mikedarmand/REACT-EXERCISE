import { useState } from "react"
import Welcome from "./Welcome"

function InteractiveWelcome (){
    const [input, setInput] = useState("")

    function handleInput(event){
        setInput(event.target.value)
    }

    return(
        <>
        <input type="text" value= {name}/>
        <Welcome name= "marius"/>
        </>
    )
}
export default InteractiveWelcome 