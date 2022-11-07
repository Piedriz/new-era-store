import React from 'react'
import '../styles/components/Payment.css';
import { AppContext } from '../context/AppContext';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

export const Payments = () => {
  const {state:{cart,buyer} } = React.useContext(AppContext);
  const [paidFor , setPaidFor] = React.useState(false);
  const navigate = useNavigate()

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const handleApprove = () => {
    setPaidFor(true)
  }
  if(paidFor){
    navigate('/checkout/success')
  }  
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item =>{
          return(
            <div className="Payment-item" key={item.title}>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          )
        })}
        {cart.length > 0 ? (
            <h3>{`Total: $${handleSumTotal(cart)}`}</h3>
          ) : <></> }
        <div className="Payment-button" id="payment-button-container">
          <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: handleSumTotal(cart),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const payData = details;
                        handleApprove(payData);
                    });
                }}
            />
        </div>
      </div>
      <div></div>
    </div>
  );
}
