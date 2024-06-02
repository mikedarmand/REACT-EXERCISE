function Colors({Colors}){
    
    return(
        <ul>
            {Colors.map(item =>{
                <li key = {item.id}>{item.name}</li>
            })}

        </ul>
    )
}
export default Colors