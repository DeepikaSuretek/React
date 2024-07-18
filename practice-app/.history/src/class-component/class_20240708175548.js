import { Component } from "react"

class User extends Component{
    constructor(){
        super();
        this.state = {
            data:'Deepika'
        }
    }

    chageData(){
        alert();
    }
    render(){
        return(
           <div>Hello {this.state.data}
           <button onClick="{()=>this.changeData()}">Update</button>
           </div>
           
        )
    }
}

export default User;