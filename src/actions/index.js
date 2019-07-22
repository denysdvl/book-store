
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

const orderRequested = () => {
    return{
        type: 'POST_ORDER_REQUEST'
    }
}

const orderPost = (res) => {
    return {
        type: 'POST_ORDER_SUCCESS',
        payload: res
    }
}

const orderError = (err) => {
    return {
        type: 'POST_ORDER_FAILURE',
        payload: err
    }
}


const postOrder = (dispatch, bookService) => (data) => {
    dispatch(orderRequested())
    const json =  `{
        "orderedProducts": [33251, 2516, 2214, 52156],
        "client": ${JSON.stringify(data)}
      }`;
       bookService.postForm(json)
    .then((data) => dispatch(orderPost(data)))
    .catch((err) => dispatch(orderError(err)))
}

const onOpenAndCloseForm = () => {
    return {
        type: 'OPEN_CLOSE_FORM'
    }
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
 
    return {
        type: 'PAGES_TO_BOOK',
        payload: id
    }

}
const onBuy = (id) => {
    return {
        type: 'BUY_TO_BOOK',
        payload: id
    }
}
const onBuyOrder = () => {
    return{
        type: 'BUY_TO_ORDER'
    }
}
 

export {
    fetchBooks,
    onAddedToCart,
    onDeleteToCart,
    onDecreaseToCart,
    onSearchToBook,
    onChangePage,
    onBuy,
    onBuyOrder,
    postOrder,
    onOpenAndCloseForm
}