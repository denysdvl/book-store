import React, {
  Component
} from 'react';
import "./search-panel.css"

import {
  compose
} from '../../utils'
import {
  withBookService
} from '../hoc';
import {connect} from 'react-redux';
import { onSearchToBook, onChangePage } from '../../actions';
import ErrorBoundry from "../error/error-boundry"

class SearchPanelContainer extends Component {
  
 onLabelChange = (event) => {
    const label = event.target.value;
    event.preventDefault();
    this.props.onSearchToBook(label);
  };

  render() {
    const { pages, onChangePage } = this.props;
    return (
      <ErrorBoundry >
        <SearchPanel
    onSearchToBook={ this.onLabelChange}
    onChangePage={onChangePage}
    pages={pages}
    />
      </ErrorBoundry>
    )
  }
}

const SearchPanel = ({onSearchToBook, onChangePage, pages}) =>  {

    return (
      <div className="search-panel d-flex ">
        <div>
           <input type="text"
          className="form-control search-input"
          placeholder="search"
          onChange={onSearchToBook}
           />
        </div>
      <div className="btn-group mr-2" role="group" aria-label="Second group" >    
{
  pages.map((page,index)=>{
    return(
      <button
      key={index}
      onClick={() => onChangePage(index+1)}
      type="button" className="btn btn-secondary"
        >{index+1}</button>
    )
  })
}         
      </div>
      </div>
    ); 
};

const mapStateToProps = (state) => {
 const {bookList: {pages, btnNone}} = state.bookReduser
  return{
    pages,
    btnNone
  }
};

const mapDispatchToProps = (dispatch) => {
return{
  onSearchToBook:(label)=> dispatch(onSearchToBook(label)),
  onChangePage: (id)=> dispatch(onChangePage(id))
}
};

export default  compose(
  withBookService(),
  connect(mapStateToProps, mapDispatchToProps)
)(SearchPanelContainer)