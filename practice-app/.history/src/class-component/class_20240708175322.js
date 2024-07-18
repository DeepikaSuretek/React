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
           <div>Hello {this.state.data}</div>
        )
    }
}

export default User;