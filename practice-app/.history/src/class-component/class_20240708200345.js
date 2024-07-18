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
           <div><h1>Hello {this.state.data}</h1> <span className="highlight">STATE</span>
           <h1>this.props.name</h1><span className="highlight">PROPS</span>
           <button onClick={()=>this.changeData()}>Update</button>
           </div>
           
        )
    }
}

export default User;