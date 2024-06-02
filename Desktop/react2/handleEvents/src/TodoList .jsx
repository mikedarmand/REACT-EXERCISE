function TodoList() {
    const Todos = ['mario',  'pietro', 'seraphin']

    const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState('');

    function handleClick(event){
        if (newTodos.trim() !== '') {
            setTodos([...todos, newTodos]);
            setNewTodos('');
    }
    function handleChange(event){
        setTodos(event.target.value)
    }
    function handleReset(){
        setTodos([])
    }
    function handleRemove(){
        li.remove()
    }
}
    return (
        <div>
            <ul>
                <li><button className="remove " onClick={handleRemove}></button></li>
            </ul>
            <input type="text" onChange={handleChange}/>
            <button type="submit" onClick={handleClick}>send!</button>
            <button type="reset" onClick={handleReset}>reset qui!</button>
        </div>
    )
}
export default TodoList 