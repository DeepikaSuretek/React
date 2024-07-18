import { useState } from "react";

function User() {
    const [count,setCount] = useState(0);
    return(
        <h1>{count} </h1>
    )
}

export default User;