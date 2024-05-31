import { useState } from "react"

function Login() {
    const [sername, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState("")

    function handleSurname(event) {
        setUsername(event.target.value)
    }
    function handlePassword(event) {
        setPassword(event.target.value)
    }
    function handleRemember(event) {
        setRemember(event.target.value)
    }
    return (
        <form >
            <input type="text" name="username" />
            <input type="text" name="passworg" />
            <input type="text" name="remember" />
        </form>


    )
}
export default Login