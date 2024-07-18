import { Component } from "react"

class User extends Component{
    constructor(){
        super();
        this.state = {
            data:'Deepika'
        }
    }
    render(){
        return(
           <div>Hello {this.props.name}</div>
        )
    }
}

export default User;