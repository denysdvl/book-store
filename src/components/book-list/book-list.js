import React, {
    Component
} from 'react';
import BookListItem from '../book-list-item';
import ErrorIndicator from '../error/error-indicator'
import {
    connect
} from 'react-redux';
import {
    fetchBooks,
    onAddedToCart,
    onChangePage,
    onBuy,
} from '../../actions';
import {
    compose
} from '../../utils'
import {
    withBookService
} from '../hoc';
import Spinner from '../spinner'
import ErrorBoundry from "../error/error-boundry"
import './book-list.css';

const BookList = ({ visibleItem, onAddedToCart, onBuy}) => {
    return(
        <div><ul className="list-group m-5">
            {  visibleItem.map((book) => {
               return (
        <li  className="d-flex  align-items-center"
         key={book.id}>
             <BookListItem book={book} 
             onAddedToCart={() => onAddedToCart(book.id)}
             onBuy={() => onBuy(book.id)}/>
             </li>
            )
                
         })
            }
        </ul>
       
        </div>
        
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        const { fetchBooks} = this.props;
        
     fetchBooks();
    }
   
    render() {
        const { visibleItem, 
            loading, 
            error, 
            onAddedToCart ,
            onBuy
         } = this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>
        }
           return (<ErrorBoundry>
               <BookList 
           visibleItem={visibleItem}
           onAddedToCart={onAddedToCart}
           onBuy={onBuy} 
           />
           </ErrorBoundry>);
          }
}



const mapStateToProps = (state) => {
   const {bookList: {books, loading, error, visibleItem}} = state.bookReduser
    return {
        books,
        visibleItem,
        loading,
        error
     };
};

const mapDispatchToProps = (dispatch, {bookService}) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookService),
        onAddedToCart: (id) => dispatch(onAddedToCart(id)),
        onChangePage: (id)=> dispatch(onChangePage(id)),
        onBuy: (id) => dispatch(onBuy(id))
    }
};


export default (compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer))