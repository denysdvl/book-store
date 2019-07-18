    
import React, { Component } from 'react';
import "./search-panel.css"

import {connect} from 'react-redux';
import { } from '../../actions';

class SearchPanel extends Component {
  constructor() {

  }

  render() {
    return (
      <div className="search-panel d-flex">
        <input type="text"
          className="form-control search-input"
          placeholder="type to search"
          onChange={onLabelChange()}
          value={label} />
      </div>
    );
  }
  
};

const mapDispatchToProps =  {
    
};


export default  connect(mapStateToProps, mapDispatchToProps)(SearchPanel);