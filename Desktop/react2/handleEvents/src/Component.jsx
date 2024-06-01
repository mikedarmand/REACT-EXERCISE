import { useEffect } from "react"

function component() {

    const isMounted = useRef(false)

    useEffect(() =>{
        if (!isMounted.current) { 
            console.log("Component mounted for the first time"); isMounted.current = true
        }
    }, [])
    return (
        <div>
            <h1>My Component</h1>
        </div>
    )
}
export default component