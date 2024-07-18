import { useState } from "react";

function Fun(props) {
    const [count,setCount] = useState(0);
    function updateCount(){
       setCount(count+1);
    }
    return(
        <div>
            <h1>{count} </h1>
            <h2>{props.name}</h2>
            <button onClick={updateCount}>update</button>
        </div>

    )
}

export default Fun;