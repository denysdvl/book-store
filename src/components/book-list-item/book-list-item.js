import React from 'react'
import './book-list-item.css'
 
const BookListItem = ({ book, onAddedToCart, onBuy }) => {
    const { title, author, coverImage, price, pagesAmount} = book;
return(
    <div className="card text-white bg-primary mb-3 books-cards ">
  <div className="card-body d-flex row">
     
         <img src={coverImage}
       alt="img-books"
       className=" img-book col-sm-12 col-md-8 col-lg-6 rounded d-block "
      /> 
         <div className="col-md-4 col-sm-12 pt-2 col-lg-6 book-details">
        <span className="book-title">{title}</span> 
        <div className="book-autho pt-2">Author - {author}</div>
        <div className="book-pages pt-2">Pages Amount - {pagesAmount}</div>
    <div className="book-price pt-2">price ( ${price} )</div>
    <div className="d-flex justify-content-between ">
    <button
    onClick={onAddedToCart}
    type="button" className="btn btn-info btn-book">DODAJ DO KOSZYKA
    </button>
      <button
      onClick={onBuy}
    className="btn btn-success mx-3 btn-book">
         ZAMÓW
        </button>
        </div>
        </div>
        
    </div>
</div>
)
}
export default BookListItem;