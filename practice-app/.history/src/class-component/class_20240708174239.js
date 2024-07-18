import { Component } from "react"

class User extends Component{
    render(){
        return(
           <div>Hello {this.props.name}</div>
        )
    }
}

export default User;