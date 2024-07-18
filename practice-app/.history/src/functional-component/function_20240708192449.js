import { useState } from "react";

function User() {
    const [count] = useState();
    return(
        <h1>{count} </h1>
    )
}

export default User;