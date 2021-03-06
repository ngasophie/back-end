import React, {Component} from 'react';
import Nav from './MainPageItems/Nav';
import Title from './MainPageItems/MiddlePageItems/Title'
import GridBoxList from './MainPageItems/MiddlePageItems/GridBoxList'
import Pagination from './MainPageItems/MiddlePageItems/Pagination'
import TableBordered from './MainPageItems/MiddlePageItems/TableBordered'
import TopPage from './MainPageItems/TopPageItems/TopPage';
import Footer from './MainPageItems/Footer/Footer';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import {allPostManagerRequest} from './../../actions/adminAction/getAction';
class AllPosts extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const {allPosts} = this.props;
        if(!allPosts) return '';

        return(
    
            <div className="right-page">
                <TopPage></TopPage>
                <div className="middle">
                    <div className="container">
                       <Title></Title>
                       <Link to ='/dashboard/admin/add-post-page'>
                            <button type="button" className="btn-add mt-1"><i className="fas fa-plus-circle"></i>  Add post</button>
                        </Link>                        
                        <TableBordered
                        value={allPosts}
                         indexOfTable = {(this.props.currentPage-1)*5}
                        ></TableBordered>
                        <Pagination
                        url={'/dashboard/admin/all-posts'}
                        ></Pagination>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
    componentDidMount(){
        this.props.fetchAllPost(1);
    }
}
const mapStateToProps = state =>{
    console.log(state);
    return {
        dataLocation:state.dataLocation,
        img_src:state.img_src,
        owner:state.owner,
        summary : state.summaryManager,
        allPosts:state.allPostManager,
        currentPage:state.currentPage
    }
    }
    const mapDispatchToProps = (dispatch, props)=>{
    return {
       fetchAllPost:(page)=>{
           dispatch(allPostManagerRequest(page))
       }
    }
    }
export default connect(mapStateToProps, mapDispatchToProps) (AllPosts);