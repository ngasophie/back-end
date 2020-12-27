import React, {Component} from 'react';
class Title extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="title-box">
                <div className="title">{this.props.title}</div>
                <div className="location">{this.props.location}</div>
                <div className="price">{this.props.price} VND</div>
            </div>
         )
    }
}
export default Title;