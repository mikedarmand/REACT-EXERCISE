import { useState } from "react"

function Login() {
    const [sername, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState("")
    const [Log, setLog] = useState("")

    function handleSurname(event) {
        setUsername(event.target.value)
    }
    function handlePassword(event) {
        setPassword(event.target.value)
    }
    function handleRemember(event) {
        setRemember(event.target.value)
    }
    function onLogin(event){
        setLog(event.target.value)
    }
    function reset(){

    }
    function handleSubmit(event){
        event.preventDefault()

    }
    return (
        <form onClick={ handleSubmit}>
            <label htmlFor="username">nome utente</label>
            <input type="text" name="username" onClick={handleSurname} />
            <label htmlFor="name">nome</label>
            <input type="text" name="passworg" onClick={handlePassword} />
            <label htmlFor="checkout">check</label>
            <input type="text" name="remember" onClick={handleRemember}/>
            <button type="submit" onClick={onLogin}>click me</button>
            <button type="submit" onClick={reset}>clicca qui!</button>
        </form>


    )
}
export default Login