const search = (state, label) => {
    const {bookList: {books}} = state;
    if (label.length === 0) {
        return books;
      }
      return books.filter((book) => book.title.toLowerCase()
        .indexOf(label.toLowerCase()) > -1);
  
  };

const checkPage = (state, action, check) => {
    const {bookList: {page, books, per_page}} = state
    
    const myBooks = action;
    let start_count = 0;
    const start_offset = (page - 1) * per_page;
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
   console.log(action.type)
    if(state === undefined){
        return{
       books: [],
       loading: true,
       error: null,
       label: "",
       visibleItem: [],
       page: 1,
       per_page: 2,
       pages: []
       }
    }
        switch (action.type) {
            case 'FETCH_BOOKS_REQUEST':
            return {
                per_page: state.bookList.per_page,
                books: [],
                    loading: true,
                    error: null,
                    visibleItem: [],
                    page: state.bookList.page,
                    pages: []   
            }
        
            case 'FETCH_BOOKS_SUCCESS':
            return {
                per_page: state.bookList.per_page,
                books: action.payload,
                loading: false,
                error: null,
                visibleItem:  checkPage(state, action.payload, true),
                page: state.bookList.page,
                pages: countPages(state, action.payload)
                
                
            }
            case 'FETCH_BOOKS_FAILURE':
                return {
                    per_page: state.bookList.per_page,
                    books: [],
                        loading: false,
                        error: action.payload,
                        visibleItem: [],
                        page: state.bookList.page,
                        pages: []
                }
            case 'SEARCH_TO_BOOK':
                return {
                    per_page: state.bookList.per_page,
                    books: state.bookList.books,
                    loading: false,
                    error: null,
                    visibleItem: checkPage(state, search(state, action.payload), false),
                    page: state.bookList.page,
                    pages: state.bookList.pages
                }   
            case 'PAGES_TO_BOOK': 
            return {
                per_page: state.bookList.per_page,
                books: state.bookList.books,
                loading: false,
                error: null,
                visibleItem: checkPage(state, state.bookList.books, true),
                page: action.payload,
                pages: state.bookList.pages
            }
                default:
                        return state.bookList;
        }
    };
export default updateBookList;