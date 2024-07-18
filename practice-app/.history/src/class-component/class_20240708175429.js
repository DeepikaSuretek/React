import { Component } from "react"

class User extends Component{
    constructor(){
        super();
        this.state = {
            data:'Deepika'
        }
    }

    chageData(){

    }
    render(){
        return(
           <div>Hello {this.state.data}</div>
           <button onClick="()=>changeData()">Update</button>
        )
    }
}

export default User;