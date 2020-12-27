import React, {Component} from 'react';
class FormAddReview extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <div className="add-review">
            <span>Your rating for this</span>
            <div className="review-rate">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <form id="review">
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <input type="submit" className="btn-custom" value="Submit Review"/>
            </form>
      </div>
         )
    }
}
export default FormAddReview;