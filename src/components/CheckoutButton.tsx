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
  // eslint-disable-next-line camelcase
  function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    const from = 'àáäãâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaaeeeeiiiioooouuuunc------'
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes

    return str
  }

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
