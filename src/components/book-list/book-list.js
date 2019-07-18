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
    onAddedToCart
} from '../../actions';
import {
    compose
} from '../../utils'
import {
    withBookService
} from '../hoc';
import Spinner from '../spinner'
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
    return(
        <ul className="list-group m-5">
            {  books.map((book) => {
    return (
        <li  className="d-flex  align-items-center"
         key={book.id}>
             <BookListItem book={book} 
             onAddedToCart={() => onAddedToCart(book.id)}/>
             </li>
            )
         })
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
     this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>
        }
           return <BookList 
           books={books}
           onAddedToCart={onAddedToCart}/>
          }
}



const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return {
        books,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, {bookService}) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookService),
        onAddedToCart: (id) => dispatch(onAddedToCart(id))
    }
};


export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)