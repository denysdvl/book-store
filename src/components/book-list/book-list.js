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

const BookList = ({ visibleItem, onAddedToCart,}) => {
    return(
        <div><ul className="list-group m-5">
            {  visibleItem.map((book) => {
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
           
         } = this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>
        }
           return <BookList 
           visibleItem={visibleItem}
           onAddedToCart={onAddedToCart} 
           />
          }
}



const mapStateToProps = ({bookList: {books, loading, error, visibleItem}}) => {
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
        onAddedToCart: (id) => dispatch(onAddedToCart(id))
    }
};


export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)