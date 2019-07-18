export default class BookService {
    constructor(){

    const __apiBase = "http://reactjs-hsnet.mocklab.io/book";

        async function getResource() {
            const res = await fetch(`${__apiBase}`);
            if (!res.ok) {
                throw new Error(`Could not fetch ${__apiBase}` +
                    ` received ${res.status}`);
            }
            return await res.json();
        }

    this.getAllBook = async () => {
        const res = await getResource();
        return res.books.map(this._transformBook);
    }
    this._transformBook = (book) => {
        return{
           id:  book.bookId,
           title: book.bookName,
           author: book.author,
           price: book.price,
           coverImage: book.img,
           pagesAmount:  book.pagesAmount
        }
    }
}   
}
