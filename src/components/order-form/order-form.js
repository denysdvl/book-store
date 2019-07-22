import React from 'react';
import { Field} from 'redux-form'

const required = value => value ? undefined : 'Required'
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
'Invalid email address' : undefined
const address = value => value && !/[a-fAF]+ +\d+/i.test(value) ?
'Invalid address' : undefined
const postcode = value => value && !/\d\d-\d\d\d/i.test(value)?
'Invalid postcode' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div>
        <input className="form-control" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span className="text-danger">{error}!</span>) || (warning && <span className="text-warning">{warning}!</span>))}
      </div>
    </div>
  )
  
  const OrderForm = ({ handleSubmit, onOpenAndCloseForm }) => {
    document.body.style.overflow = "hidden"
      return (
  <div>
      <div className="card-header">Header 
        <button
              onClick={onOpenAndCloseForm}
              className="btn  btn-sm float-right">
                <i className="fa fa-close" />
              </button></div>
          <div className="card-body">
          <form onSubmit={handleSubmit}>
    <div className="row ">
      <div className="col-lg-6 col-sm-12 mb-3">
              <Field 
              name="name"  
              type="text" 
              component={renderField} 
              label="Imię"
              validate={[ required ]}
       />
      </div>
      <div className="col-lg-6 col-sm-12 mb-3">
              <Field 
              name="lastName" 
              component={renderField}
              type="text" 
              label="Nazwisko" 
              validate={required}/>
      </div>
    </div>
    <div className="row ">
      <div className="col-lg-6 col-sm-12 mb-3">
              <Field 
              name="phoneNumber" 
              component={renderField} 
              type="text" 
              label="Numer kontaktowy"
              validate={[ required, number ]}
               />
      </div> 
      <div className="col-lg-6 col-sm-12 mb-3">
              <Field  
              name="email"
              component={renderField} 
              type="text"
              validate={email}
              label="Email"/>
      </div>
     
    </div>
    <div className="row ">
      <div className="col-lg-4 col-sm-12 mb-3">
              <Field 
              name="address" 
              component={renderField} 
              validate={[required, address]} 
              type="text" 
              label="Ulica i numer budynku"/>
      </div>
      <div className="col-lg-4 col-sm-12 mb-3">
              <Field 
              type="text" 
              name="city" 
              validate={required} 
              component={renderField} 
              label="Miejscowość" />
      </div>
      <div className="col-lg-4 col-sm-12 mb-3">
              <Field 
              type="text" 
              name="postalCode" 
              validate={[required, postcode]} 
              component={renderField}
              label="Kod pocztowy" />
      </div>
    </div>
    <div className="modal-footer pb-0">
          <button 
          type="submit"
           className="btn btn-primary">
               ZAMAWIAM I PŁACĘ
               </button>
          <button 
          onClick={onOpenAndCloseForm}
          type="button"  
          className="btn btn-secondary" 
          data-dismiss="modal">
              Close
              </button>
        </div>
  </form>
      </div>
      </div>
          
       )
    }

    export default OrderForm;