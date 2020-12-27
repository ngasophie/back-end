import React, {Component} from 'react';
import NavIndex from './MainPage/GeneralItems/Nav';
import Footer from './MainPage/GeneralItems/Footer'
import routes from './../routers'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
class IndexPage extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="index-page">
                <Router>
                    <NavIndex></NavIndex>
                    {this.showContentMenu(routes)}
                </Router>
                <Footer></Footer>
            </div>
        );
    }
    showContentMenu = (routes) =>{
        let result = null;
        if(routes.length >0){
          result = routes.map((route,index)=>{
            return (<Route
              key={index}
              path={route.path}
              exact = {route.exact}
              component = {route.main}
            />)
          });
        }
        return <Switch>{result}</Switch>
    }    
}
export default IndexPage;