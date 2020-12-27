import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { actDispatchIdUser } from './../../../../actions/dashboardAction/getAction';
class TopPage extends Component{
    constructor(props){
        super(props)
    }
    onClick = () =>{
//  log out
        sessionStorage.removeItem('owner/admin-login');
        this.props.dispatchIdUser(null);
    }
    render(){
        let{owner, img_src} = this.props;
        img_src= img_src.concat('avt');
        return(
            <div className="top">
            <div className="container">
                <div className="toggle-collapse">
                    <div className="toggle-icons">
                        <i className="fas fa-bars"></i>
                    </div>
                </div> 
                <div>
                    <i className="far fa-bell"></i>
                </div>
                <div>
                    <i className="far fa-envelope"></i>
                </div>
                <div className="avt"><img src={`${img_src}/${owner.img_src}`} alt=""/></div>
                <div className="dropdown">
                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     {owner.name}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link to ='/dashboard/profile' className="dropdown-item" >Profile details</Link>
                      <button className="dropdown-item" onClick={this.onClick}>
                         Log out
                          </button>
                    </div>
                  </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps= state =>{
    return {
        owner:state.owner,
        img_src:state.img_src
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        dispatchIdUser:(owner) =>{
            dispatch(actDispatchIdUser(owner))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps) (TopPage);