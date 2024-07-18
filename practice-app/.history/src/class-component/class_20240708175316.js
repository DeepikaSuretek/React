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
           <div>Hello {this.state.name}</div>
        )
    }
}

export default User;