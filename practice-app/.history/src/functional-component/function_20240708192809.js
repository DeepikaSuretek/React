import { useState } from "react";

function User() {
    const [count,setCount] = useState(0);
    function updateCount(){
       setCount({count:2})
    }
    return(
        <div>
            <h1>{count} </h1>
            <button onClick={()=>updateCount()}>update</button>
        </div>

    )
}

export default User;