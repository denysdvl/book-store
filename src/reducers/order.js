const updeateOrederItem = (state, action) => {
    
        const {bookList: {books}, orderBook: {obviouslyOrder}} = state;
        if(action === undefined){
        return {
            obviouslyOrder : !obviouslyOrder,
            orederItems: [],
            totalPrice: 0
        }
         }
    const book = books.find(({id}) => id === action);
    const newItem = {
        id: book.id,
        title: book.title,
        count: 1,
        total: book.price
    };
    return {
    obviouslyOrder : !obviouslyOrder,
    orederItems: [newItem],
    totalPrice: book.price
}
}
const updeateOrederItems = (state) => {
    const {shoppingCart: {cartItems, orderTotal}, orderBook: {obviouslyOrder}} = state;
    return {
        obviouslyOrder : !obviouslyOrder,
        orederItems: cartItems,
        totalPrice: orderTotal
    }
}

const updateBuyBook = ( state, action) => {
    
    if(state === undefined){
        return{
            obviouslyOrder: false,
            orederItems: [],
            totalPrice: 0
       }
    }
    
    switch(action.type){
        case 'BUY_TO_BOOK':
            return updeateOrederItem(state, action.payload)
        
        case 'BUY_TO_ORDER':
            return updeateOrederItems(state)
        case 'POST_ORDER_REQUEST':
           return {
                obviouslyOrder: false,
                orederItems: [],
                totalPrice: 0
        }    
        default:
        return state.orderBook
        }
    
}

export default updateBuyBook;