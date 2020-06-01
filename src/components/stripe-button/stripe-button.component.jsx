import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jOfUvYlAQCL4mcvcT4bUmrMg00tgANSkWP';
  
  const onToken = token =>{
    console.log(token);
    alert('Payment Successful');
  }

  return(
    <StripeCheckout 
      label='Pay Now'
      name='ilovemaskusa'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/show/78348a45a2'
      description={`Your total is $${ price }`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken} /**procesa pago - va otra cosa pendiente */
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;