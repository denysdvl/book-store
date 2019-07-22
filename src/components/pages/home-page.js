import React from 'react'
import SearchPanel from '../search-panel'
import ErrorBoundry from "../error/error-boundry"
import BookList from '../book-list'

const HomePage = () => {
    
     return (
          <ErrorBoundry>
              <SearchPanel />
              <BookList  />
             </ErrorBoundry>
   
            

     );
};

export default HomePage;