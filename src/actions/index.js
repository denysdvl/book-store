
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequested = () =>{
    return{
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const  fetchBooks = (dispatch, bookService) => () => {
    dispatch(booksRequested());
    bookService.getAllBook()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
}

const onAddedToCart = (bookId) => {
return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
}
}
const onDeleteToCart = (bookId) => {
    return {
        type: 'BOOK_DELETE_TO_CART',
        payload: bookId
    }
}
const onDecreaseToCart = (bookId) => {
    return {
        type: 'BOOK_DECREASE_TO_CART',
        payload: bookId
    }
}

const onSearchToBook = (label)=> {
        return {
        type: 'SEARCH_TO_BOOK',
        payload: label
    }
        
}
const onChangePage = (id) => {
    console.log(id)
    return {
        type: 'PAGES_TO_BOOK',
        payload: id
    }

}
 

export {
    fetchBooks,
    onAddedToCart,
    onDeleteToCart,
    onDecreaseToCart,
    onSearchToBook,
    onChangePage
}