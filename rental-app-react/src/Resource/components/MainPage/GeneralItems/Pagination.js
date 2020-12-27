import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {currentPage} from './../../../actions/index'
import {actFetchAllPostsRequest} from './../../../actions/index';

class Pagination extends Component{
  static pageNumbers=0;
  static current =1;
    constructor(props){
        super(props);
        this.state = {
          currentPage:1,
        }
    }
    handleClickNext = ( event) =>{
      const {url} = this.props

      let currentPage = this.state.currentPage;
      if(currentPage < Pagination.pageNumbers){
        currentPage = currentPage+1;
        this.props.getCurrentPage(currentPage);
        this.props.fetchAllPosts(currentPage);
        // ? allOwner
      }
      this.setState({
        currentPage,
    
      });
    }
    handleClickPrev = (event) =>{
      let currentPage = this.state.currentPage;
      if(currentPage >=2){
        currentPage = currentPage-1;
        this.props.getCurrentPage(currentPage);
        this.props.fetchAllPosts(currentPage)
      }
      this.setState({
        currentPage
      });
    }
    render(){
      const {url} = this.props
      const {currentPage} = this.state;
      if(url === '/list-owner'){
        Pagination.pageNumbers = this.props.lastPageAllOwner;
      }
      else{
        Pagination.pageNumbers = this.props.lastPageAllPost;
      }
      Pagination.current = currentPage;
      let linkCurrent = `${url}/page-${currentPage}`;
      let nextPage ;
      let prevPage;
      if(currentPage <= 1){
        nextPage = `${url}/page-${currentPage+1}`;
         prevPage = `${url}/page-${currentPage}`;
      }
      else if(currentPage >= Pagination.pageNumbers){
        nextPage = `${url}/page-${Pagination.pageNumbers}`;
        prevPage = `${url}/page-${currentPage-1}`;
      }
      else{
        nextPage = `${url}/page-${currentPage+1}`;
         prevPage = `${url}/page${currentPage-1}`;
      }
        return(
            <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item"onClick = {this.handleClickPrev}>
                <Link to ={prevPage} className="page-link">Previous</Link>
              </li>
              <li className="page-item active">
              <Link to={linkCurrent} className="page-link">{currentPage} <span className="sr-only">(current)</span></Link>
              </li>
              {/* <li className="page-item"><Link to={linkCurrent} className="page-link">{currentPage}</Link></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li> */}
              <li className="page-item" onClick = {this.handleClickNext}>
                <Link to = {nextPage} className="page-link" >Next</Link>
              </li>
            </ul>
          </nav>
         )
    }
    componentDidMount(){
      this.props.getCurrentPage(1);
    }

}
const mapStateToProps = state =>{
  return{
    allPosts: state.allPosts,
    lastPageAllPost:state.lastPageAllPost,
    lastPageAllOwner:state.lastPageAllOwner
  }
}
const mapDispatchToProps  = (dispatch, props)=>{
  return{
    getCurrentPage : (current) =>{
        //  luu vao store
        dispatch(currentPage(current))
    },
    fetchAllPosts :(number) =>{
      dispatch(actFetchAllPostsRequest(number))
  }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Pagination);