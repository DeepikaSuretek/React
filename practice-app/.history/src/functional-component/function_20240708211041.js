import { useState } from "react";

function Fun(props) {
    const [count,setCount] = useState(0);
    const [inputData,setInputData] = useState();
    function updateCount(){
       setCount(count+1);
    }
    function getData(val){
        console.log(val.target.value);
    }
    return(
        <div>
            <h1>{count} <span className="highlight">STATE</span></h1>
            <h2>{props.name}  <span className="highlight"> PROPS</span></h2>
            <input onChange={getData}></input>
            <button onClick={updateCount}>update</button>
        </div>

    )
}

export default Fun;