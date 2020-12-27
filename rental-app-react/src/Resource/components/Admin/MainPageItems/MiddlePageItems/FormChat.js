import React, {Component} from 'react';
class FormChat extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="chat">
            <div className="message-box">
                <div className="message mine">
                    <span>Hello</span>
                </div>
                <div className="message other">
                    <span>Hello</span>
                </div>
                <div className="message mine">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat ea pariatur voluptate illum corrupti ab labore nisi! Officia fugit pariatur natus id iusto blanditiis sapiente voluptatem iure ab ea?</span>
                </div>
                <div className="message other">
                    <span>Hello</span>
                </div>
            </div>
            <form id="form-add-message">
                <input type="text" placeholder="message"/>
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div>
        );
    }
}
export default FormChat;