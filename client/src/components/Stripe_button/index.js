import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import API from "../../utils/API";

// TODO:  Change this line to pull from DB
// The multiplier is required; Stripe defaults to cents
const rent = 1500 * 100;
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log(token);
    API.postPay(
      {
            description: "Rent",
            source: token.id,
            currency: "USD",
            amount: rent
          }).then(response => {
      console.log(response)
    }) 
  }
 
  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_Ep0VtcRNsoS1FrKiqgC5wW5W00W91xkiX2"
        billingAddress
        amount = { rent }
        allowRememberMe = {false}/>
    )
  }
}