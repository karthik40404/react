import {Component} from "react";

class Demo_class extends Component{
    constructor(){
        super()
        this.state={color:'blue',width:'20px'}
    }
    render(){
        return(
            <h2>my name is maximus decimus merudius{this.state.color}{this.state.width}</h2>
        )
    }
}
export default Demo_class