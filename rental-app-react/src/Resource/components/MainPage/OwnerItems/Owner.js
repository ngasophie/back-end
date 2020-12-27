import React, {Component} from 'react';
import {connect} from 'react-redux';
class Owner extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {item, img_src} = this.props
        img_src = img_src.concat('avt');

        //  avatar thay sau
        return(
            <div className="card" data-aos="flip-left">
            <img className="d-block w-100" src={`${img_src}/${item.img_src}`}/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <div className="details">
                <div className="location infor">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{item.address.city}</span>
                </div>
                <div className="phone infor">
                    <i className="fas fa-phone-alt"></i>
                    <span>{item.phone_number}</span>
                </div>
                <div className="email infor">
                    <i className="far fa-envelope"></i>
                    <span>{item.email}</span>
                </div>
              </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        img_src : state.img_src
    }
}
export default connect(mapStateToProps,null) (Owner);