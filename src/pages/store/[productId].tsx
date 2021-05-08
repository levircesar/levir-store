/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Stripe from 'stripe'
import { GetStaticPaths, GetStaticProps } from 'next'
import stripeConfig from '../../../config/stripe'
import CheckoutButton from '../../components/CheckoutButton'
import { Container, Size } from '../../styles/pages/Home'
interface Props {
  product: Stripe.Product
  priceId: Stripe.Price
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  })

  const products = await stripe.products.list()

  const paths = products.data.map(product => ({
    params: {
      productId: product.id as string
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  })

  const { productId } = params

  const product = await stripe.products.retrieve(productId as string)
  const price = await stripe.prices.list()

  const priceId = price.data.find(price => {
    return price.product === product.id
  })

  return {
    props: {
      product,
      priceId
    }
  }
}

export default function Produtos({ product, priceId }: Props) {
  return (
    <Size max={'1200px'}>
      <Container>
        <div>
          <h1>{product.name}</h1>
          {product.description ? (
            <p>{product.description}</p>
          ) : (
            'Produto sem descrição'
          )}
          {product.images && <img width={250} src={product.images[0]} />}
          <h1 style={{ fontSize: '50px' }}>
            {'R$ '}
            {(priceId.unit_amount / 100).toFixed(2)}
          </h1>
        </div>

        <div>
          <CheckoutButton dados={[{ price: priceId.id, quantity: 1 }]} />
        </div>
      </Container>
    </Size>
  )
}
