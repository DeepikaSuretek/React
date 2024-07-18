import { Component } from "react"

class User extends Component{
    constructor(){
        super();
        this.state = {
            data:0
        }
    }

    changeData(){
        this.setState({data: this.state.data+1});
    }
    render(){
        return(
           <div><h1>Hello {this.state.data}<span className="highlight">  STATE</span></h1> 
           <h1>{this.props.name}<span className="highlight">  PROPS</span></h1>
           <button onClick={()=>this.changeData()}>Update</button>
           </div>
           
        )
    }
}

export default User;