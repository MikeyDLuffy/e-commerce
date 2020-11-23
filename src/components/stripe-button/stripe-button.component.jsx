import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HqWgaE4yotvnOBXBsztGLlu0sxnaKVTVtnM2KAu4cKpbLoyRwkZDkANl1Mx73GxYB79wonLN0sNpHdNLzkOzz8f00wO9WVdba';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label ='Pay Now'
            name='SouthCoast Seafood Direct' 
            shippingAddress 
            billingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;