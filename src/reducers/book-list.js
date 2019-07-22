const search = (state, label) => {
    const {bookList: {books}} = state;
    if (label.length === 0) {
        return books;
      }
      return books.filter((book) => book.title.toLowerCase()
        .indexOf(label.toLowerCase()) > -1);
  
  };

const checkPage = (state, action, check, page) => {
    const {bookList: { books, per_page}} = state
    const myBooks = action;
    let start_count = 0;
    const start_offset = (page - 1) * per_page
   if(books.length===myBooks.length || check){
    const arr = myBooks.filter((book, index) =>(index >= start_offset && start_count++ < per_page));  
    return arr
   }
 return myBooks  
};
  
const countPages = (state, action) => {
    const {bookList: { per_page}} = state
    const arr1 = [];
    for(let i = 0; i < Math.ceil(action.length / per_page); i++) {
        arr1.push(i+1);
    };
   return arr1;
}

const updateBookList = (state, action) => {
 
    if(state === undefined){
        return{
       books: [],
       loading: true,
       error: null,
       label: "",
       visibleItem: [],
       per_page: 2,
       pages: []
       }
    }
        switch (action.type) {
            case 'FETCH_BOOKS_REQUEST':
            return {
                per_page: state.bookList.per_page,
                pages: [],   
                books: [],
                loading: true,
                error: null,
                visibleItem: []
                    
            }
        
            case 'FETCH_BOOKS_SUCCESS':
            return {
                per_page: state.bookList.per_page,
                pages: countPages(state, action.payload, 1),
                btnNone: true,
                books: action.payload,
                loading: false,
                error: null,
                visibleItem:  checkPage(state, action.payload, true, 1)  
            }
            case 'FETCH_BOOKS_FAILURE':
                return {
                    per_page: state.bookList.per_page,
                    pages: [],
                    books: [],
                    loading: false,
                    error: action.payload,
                    visibleItem: []
                    
                }
            case 'SEARCH_TO_BOOK':
                return {
                    per_page: state.bookList.per_page,
                    pages: state.bookList.pages,
                    books: state.bookList.books,
                    loading: false,
                    error: null,
                    visibleItem: checkPage(state, search(state, action.payload), false, 0)
                   
                }   
            case 'PAGES_TO_BOOK': 
            return {
                per_page: state.bookList.per_page,
                start_offset: (state.bookList.page - 1) * state.bookList.per_page,
                pages: state.bookList.pages,
                books: state.bookList.books,
                loading: false,
                error: null,
                visibleItem: checkPage(state, state.bookList.books, true, action.payload)
            
            }
                default:
                        return state.bookList;
        }
    };
export default updateBookList;