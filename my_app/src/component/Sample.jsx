import {Component} from "react";

export default class Sample_class extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <h2>class component{this.props.color}{this.props.width}</h2>
        )
    }
}
