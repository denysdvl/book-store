import React from 'react';
import OrderForm from './order-form'
import Spinner from '../spinner'

const VisilbleElement = ({ handleSubmit,
    onOpenAndCloseForm,
     successPost,
       loading,
       error }) => { 
    if(loading){
   return (
<div className="overlay">
  <div className=" popup">
    <Spinner/>
  </div>
</div>
   )
}
if(error){
   return (
<div className="overlay">
  <div className="alert alert-dismissible alert-danger popup">
  <button type="button" className="close" onClick={onOpenAndCloseForm} data-dismiss="alert">&times;</button>
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </div>
</div>
   );
}
if(successPost){
 return (
<div className="overlay">
  <div className="alert alert-dismissible alert-success popup">
  <button type="button" onClick={onOpenAndCloseForm} className="close" data-dismiss="alert">&times;</button>
  <strong>Well done! You successfully send the order</strong> 
  </div>
</div>
); 
}
 return (  
<div className="overlay">
  <div className="card border-secondary mb-3 popup">
    <OrderForm
    handleSubmit={handleSubmit}
    onOpenAndCloseForm={onOpenAndCloseForm} 
    />
  </div>
</div>)
}
export default VisilbleElement;