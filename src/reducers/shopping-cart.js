
const updateCartItems = (cartItems, checkBook, typeUpdate, price) => {
    const oldBook = cartItems[checkBook]
    const addBook = { ...oldBook,
        count: oldBook.count + typeUpdate,
        total: (+oldBook.total + +typeUpdate*price).toFixed(2) };
  return [
    ...cartItems.slice(0, checkBook),
    addBook,
    ...cartItems.slice(checkBook + 1)
]
}

const addedCartItems = (cartItems,  book ) => {
    const newItem = {
        id: book.id,
        title: book.title,
        count: 1,
        total: book.price
    };
    return[
            ...cartItems,
            newItem
        ]
    
}
const deletedCartItems = (cartItems, idDelBook) => {
    return[
        ...cartItems.slice(0, idDelBook),
        ...cartItems.slice(idDelBook + 1)
    ]
}

const updateTotalOrder = (typeUpdate, orderTotal, price, cartItems, checkBook) => {
    if(typeUpdate===0){
        const oldBook = cartItems[checkBook];
        const newTotalOrder = (+orderTotal - oldBook.total).toFixed(2);
        return newTotalOrder;
    }
    const newTotalOrder = (+orderTotal + +typeUpdate*price).toFixed(2);
    return  newTotalOrder;
}
const updateTotalCount = (typeUpdate, orderCount, cartItems, checkBook) => {
    if(typeUpdate===0){
        const oldBook = cartItems[checkBook];
        const newTotal = (+orderCount - oldBook.count);
        return newTotal;
    }
    const newTotal = (+orderCount + +typeUpdate);
    return  newTotal;
}

const updateOrder = (state, payload, typeUpdate) => {
    const bookId = payload;
    const {bookList: {books}, shoppingCart: {cartItems, orderTotal, orderCount}} = state;
    const book = books.find(({id}) => id === bookId);
    const checkBook = cartItems.findIndex(({id}) => id === bookId);
    switch(typeUpdate){
    case -1:
        const checkCount = cartItems[checkBook].count; 
        if(checkCount===1){
               return{ 
                orderCount: updateTotalCount(typeUpdate, orderCount, cartItems, checkBook),
                orderTotal: updateTotalOrder(typeUpdate, orderTotal, book.price, cartItems, checkBook),
                cartItems: deletedCartItems(cartItems, checkBook)
           }     
        }
        else{ return{
                    orderCount: updateTotalCount(typeUpdate, orderCount, cartItems, checkBook),
                    orderTotal: updateTotalOrder(typeUpdate, orderTotal, book.price, cartItems, checkBook),
                    cartItems: updateCartItems(cartItems, checkBook, typeUpdate, book.price)
                }                
        }
    case 1:
        if (checkBook === -1) {
                return {
                    orderCount: updateTotalCount(typeUpdate, orderCount, cartItems, checkBook),
                    orderTotal: updateTotalOrder(typeUpdate, orderTotal, book.price, cartItems, checkBook),
                    cartItems: addedCartItems(cartItems, book)
                }
            } else {
                return {
                    orderCount: updateTotalCount(typeUpdate, orderCount, cartItems, checkBook),
                    orderTotal: updateTotalOrder(typeUpdate, orderTotal, book.price, cartItems, checkBook),
                    cartItems: updateCartItems(cartItems, checkBook, typeUpdate, book.price)
                }
            }
    case 0:
         return{ 
                    orderCount: updateTotalCount(typeUpdate, orderCount, cartItems, checkBook),
                    orderTotal: updateTotalOrder(typeUpdate, orderTotal, book.price, cartItems, checkBook),
                    cartItems: deletedCartItems(cartItems, checkBook)
               }
       default:
            break
        }       
    }

const updateShoppingCart = (state, action) => {
    if(state === undefined){
        return{
            orderCount: 0,
            cartItems: [],
            orderTotal: 0 
       }
    }

    switch (action.type) {

        case 'BOOK_ADDED_TO_CART':
                return updateOrder(state, action.payload, 1);

                case 'BOOK_DELETE_TO_CART':
                return updateOrder(state, action.payload, 0);
               
                case 'BOOK_DECREASE_TO_CART':
                 return updateOrder(state, action.payload, -1);
                 default:
                     return state.shoppingCart;
    }
}
export default updateShoppingCart;