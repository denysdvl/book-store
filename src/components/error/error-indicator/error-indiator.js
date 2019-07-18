import React from 'react';

import './error-indiator.css';


const ErrorIndicator = () => {
  return (
    <div className="align-items-center error-indicator py-5">
    <i className="fa fa-exclamation-triangle"/>
     <span>Something went wrong.</span>
       <span> (But our librarians are working on it.)
      </span>
      </div>
    
);
};

export default ErrorIndicator;