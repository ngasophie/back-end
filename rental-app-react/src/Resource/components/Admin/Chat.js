import React, {Component} from 'react';
import Title from './MainPageItems/MiddlePageItems/Title'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import FormChat from './MainPageItems/MiddlePageItems/FormChat';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class Chat extends Component{
    constructor(props){
        super(props);

    }
    render(){

        return(
    
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                       <Title></Title>
                       <br></br>
                        <FormChat></FormChat>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
const mapStateToProps= state =>{
    return {
        owner:state.owner
    }
}
export default connect(mapStateToProps,null) (Chat);