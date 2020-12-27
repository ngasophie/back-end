import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Logo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
             <div className="nav-brand">
                 <Link to ="/" className="text-gray">EA</Link>
            </div>
           
        )
    }
}
export default Logo;