    
import React, {Component} from 'react';
import { reduxForm, reset} from 'redux-form'
import {connect} from 'react-redux';
import {
    compose
} from '../../utils'
import {
    withBookService
} from '../hoc';
import { postOrder, onOpenAndCloseForm } from '../../actions';
import VisilbleElement from './visible-element'



  class OrderFormContainer extends Component{
  
    handleSubmit(data) {
        this.props.postOrder(data)
        this.props.dispatch(reset('OrderFormContainer'));
      }

    render(){
        const { handleSubmit,
          onOpenAndCloseForm,
          obviouslyform,
          successPost,
             loading,
             error } = this.props;
             
        const formVis = obviouslyform?
        <VisilbleElement
        handleSubmit={handleSubmit(this.handleSubmit.bind(this))}
        onOpenAndCloseForm={onOpenAndCloseForm}
        successPost={successPost}
        loading={loading}
        error={error}
         /> : document.body.style.overflow = "";

return  formVis      
    }
}


const mapStateToProps = (state) => {
  const {postOrder: {obviouslyform, successPost, error, loading}} = state.bookReduser
   return {
    obviouslyform,
    successPost,
       loading,
       error
    };
};

const mapDispatchToProps = (dispatch, {bookService}) => {
    return {
        postOrder: postOrder(dispatch, bookService),
        onOpenAndCloseForm:  () => dispatch(onOpenAndCloseForm())
    }
};
  
  export default reduxForm({ form: 'OrderFormContainer' })(compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(OrderFormContainer))

  