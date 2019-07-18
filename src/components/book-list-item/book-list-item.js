import React from 'react'
import './book-list-item.css'
 
const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, coverImage, price, pagesAmount} = book;
return(
    <div className="card text-white bg-primary mb-3 books-cards">
  <div className="card-body row">
      <img src={coverImage}
       alt="img-books"
       className="img-book col-12 col-md-8 rounded d-block "
      /> 
       <div className="col-md-4 col-sm-12 pt-2 book-details">
        <span className="book-title">{title}</span> 
        <div className="book-autho pt-2">Author - {author}</div>
        <div className="book-pages pt-2">Pages Amount - {pagesAmount}</div>
    <div className="book-price pt-2">price ( ${price} )</div>
    <button
    onClick={onAddedToCart}
    type="button" className="btn btn-info add-to-cart">Add to cart</button>
        </div>
        
    </div>
</div>
)
}
export default BookListItem;