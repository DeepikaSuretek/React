import { Component } from "react"

class User extends Component{
    render(){
        return(
           <div>{if(true){console.log('Hello')}}</div>
        )
    }
}

export default User;