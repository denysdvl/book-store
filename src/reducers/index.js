
import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart'
import updateBuyBook from './order'
import updatePostOrder from './postOrder'


const reducer = (state, action) => {  
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        orderBook: updateBuyBook(state, action),
        postOrder: updatePostOrder(state, action)
    }
}
export default reducer;