import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import stripeConfig from '../../config/stripe'
import { Button } from '../styles/pages/Home'
const stripePromise = loadStripe(stripeConfig.publicKey)

interface Props {
  price?: string
  quantify?: number
}

interface arrayProps {
  dados: Array<{
    price?: string
    quantity?: number
  }>
}

const CheckoutButton: React.FC<arrayProps> = ({ dados }: arrayProps) => {
  async function handleClick() {
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      lineItems: dados,
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      billingAddressCollection: 'required',
      shippingAddressCollection: { allowedCountries: ['BR'] }
    })

    if (error) {
      console.log(error)
    }
  }
  return (
    <Button
      style={{ padding: '20px', width: '200px' }}
      role="link"
      onClick={handleClick}
    >
      Comprar
    </Button>
  )
}

export default CheckoutButton
