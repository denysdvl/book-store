import React, {Component} from 'react'
import './order-sum.css'

import {
    withBookService
  } from '../hoc';
  import {connect} from 'react-redux';
  import { onBuy, onOpenAndCloseForm } from '../../actions';
  import {
    compose
  } from '../../utils'
  
  import ErrorBoundry from "../error/error-boundry"

const OrderSum = ({onBuy, orederItems, totalPrice, onOpenAndCloseForm}) => {


    const renderRow = (item, idx) => {
        const {id , title, count, total} = item
        return (
          <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>${total}</td>
        </tr>    
        );
      }


    document.body.style.overflow = "hidden"
    return (
        <div className="overlay">
    <div className="card border-secondary mb-3 popup">
      <div className="card-header">Header 
      <button
      onClick={() => onBuy()}
            className="btn  btn-sm float-right">
              <i className="fa fa-close" />
            </button></div>
      <div className="card-body">
      <table className="table order-tabel">
        <thead>
          <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          </tr>
        </thead>

        <tbody>
          
        {
            orederItems.map(renderRow)
          } 
         
       </tbody>
      </table>
    
      <div className="total"> Total: ${totalPrice} 
      <button
            onClick={onOpenAndCloseForm}
            className="btn  btn-success float-right">
                DALEJ
            </button> </div>  
      </div>
    </div>
        </div>  
    )
}

class OrderSumContainer extends Component{
    render(){
        const {totalPrice, orederItems, onBuy, onOpenAndCloseForm} = this.props;
        const orderVis = this.props.obviouslyOrder?
        <OrderSum onBuy={onBuy} orederItems={orederItems} totalPrice={totalPrice} onOpenAndCloseForm={onOpenAndCloseForm}/>: document.body.style.overflow = "";

return (
    <ErrorBoundry>
        {orderVis}
    </ErrorBoundry>
)
    }
}


const mapStateToProps = (state) => {
 const {orderBook: {obviouslyOrder, orederItems, totalPrice}} = state.bookReduser
    return{
        obviouslyOrder, 
        orederItems,
        totalPrice
    }
  };

  const mapDispatchToProps =  {
  
    onBuy: onBuy,
    onOpenAndCloseForm: onOpenAndCloseForm
};

export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(OrderSumContainer);