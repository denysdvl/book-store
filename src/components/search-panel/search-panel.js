    
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

class SearchPanelContainer extends Component {
    
 onLabelChange = (event) => {
    const label = event.target.value;
    event.preventDefault();
    this.props.onSearchToBook(label);
  };
  render() {
    const { pages} = this.props;
    return <SearchPanel
    onSearchToBook={ this.onLabelChange}
    onChangePage={this.props.onChangePage}
    pages={pages}
    />
  }
}

const SearchPanel = ({onSearchToBook, onChangePage, pages}) =>  {

    return (
      <div className="search-panel d-flex ">
        <div>
           <input type="text"
          className="form-control search-input"
          placeholder="type to search"
          onChange={onSearchToBook}
           />
        </div>
      <div>
        <ul>
{
  pages.map((page,index)=>{
    return(
      <button
      key={index}
      onClick={() => onChangePage(index+1)}
      className="btn btn-secondary"
        >{index+1}</button>
    )
  })
} 
      </ul>
        
      </div>
      </div>
    ); 
};

const mapStateToProps = ({bookList: {pages}}) => {
  return{
    pages
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