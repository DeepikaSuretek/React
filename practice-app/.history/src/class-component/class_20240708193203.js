import { Component } from "react"

class User extends Component{
    constructor(){
        super();
        this.state = {
            data:'Deepika'
        }
    }

    changeData(){
        this.setState({data:"changes"});
    }
    render(){
        return(
           <div><h1>Hello {this.state.data}</h1>
           <button onClick={()=>this.changeData()}>Update</button>
           </div>
           
        )
    }
}

export default User;