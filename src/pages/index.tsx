/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import {
  Container,
  SliderBox,
  Size,
  Button,
  BoxStore
} from '../styles/pages/Home'
import properties from '../styles/slideConfig'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'
import stripeConfig from '../../config/stripe'
import Link from 'next/link'
import CheckoutButton from '../components/CheckoutButton'

type Produtos = {
  id: string
  description: string
  images: string
  name: string
  product?: string
  unit_amount?: number
  unit_amount_decimal?: number
}

type StoreProps = {
  product: Produtos[]
  price: Produtos[]
}

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  })
  const product = await stripe.products.list()
  const price = await stripe.prices.list()

  return {
    props: {
      product: product.data,
      price: price.data
    },
    revalidate: 60
  }
}

function Home({ product, price }: StoreProps) {
  const [amount, setAmount] = useState(0)
  const [cart, setCart] = useState([])
  const [teste, setTeste] = useState([])

  function criarNovoArray() {
    product.map(item => {
      price.find(valor => {
        if (valor.product === item.id) {
          const array = {
            product: valor.product,
            price: valor.id,
            preco: valor.unit_amount
          }
          setTeste(oldvalor => [...oldvalor, array])
        }
      })
    })
  }

  function calculateAmount() {
    let newValue = 0
    cart.map(value => (newValue = newValue + value.quantity))
    setAmount(newValue)
  }

  function handleCart(newElement) {
    if (cart.find(valor => valor.price === newElement.price)) {
      const index = cart.findIndex(valor => valor.price === newElement.price)
      const newValor = {
        price: cart[index].price,
        quantity: cart[index].quantity + 1
      }
      cart.splice(index, 1)
      return setCart(oldArray => [...oldArray, newValor])
    }
    setCart(oldArray => [...oldArray, newElement])
  }

  function handleCartRemove(newElement) {
    if (cart.find(valor => valor.price === newElement.price)) {
      const index = cart.findIndex(valor => valor.price === newElement.price)
      const newValor = {
        price: cart[index].price,
        quantity: cart[index].quantity - 1
      }
      cart.splice(index, 1)
      if (newValor.quantity === 0) {
        return setCart(oldArray => [...oldArray])
      } else {
        return setCart(oldArray => [...oldArray, newValor])
      }
    }
  }

  function deleteCart() {
    setCart([])
    calculateAmount()
  }

  useEffect(() => {
    criarNovoArray()
  }, [])

  useEffect(() => {
    calculateAmount()
  }, [cart])

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Slide {...properties} style={{ marginTop: '20px' }}>
        <SliderBox image="image.svg">
          <h1>Primeiro Anuncio</h1>
        </SliderBox>
        <SliderBox>
          <h1>Segundo anuncio</h1>
          <div>
            <img
              style={{ width: '100%', height: '100%' }}
              src="image.svg"
              alt=""
            />
          </div>
        </SliderBox>
      </Slide>
      <Size max={'1200px'}>
        <h1 style={{ textAlign: 'center' }}>Bem vindo a Levir Store</h1>
        <p style={{ textAlign: 'center' }}>Uma loja em NextJS + Stripe</p>

        <main
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {product.map(item => {
            return (
              <BoxStore key={item.id} style={{ margin: '20px' }}>
                <h1>{item.name}</h1>
                {item.images && (
                  <img width={250} height={250} src={item.images[0]} />
                )}
                <h1>
                  {'R$ '}
                  {(
                    price.find(valor => valor.product === item.id).unit_amount /
                    100
                  ).toFixed(2)}
                </h1>
                <button
                  onClick={() =>
                    handleCart({
                      price: price.find(valor => valor.product === item.id).id,
                      quantity: 1
                    })
                  }
                >
                  add to cart
                </button>
                <button
                  onClick={() =>
                    handleCartRemove({
                      price: price.find(valor => valor.product === item.id).id,
                      quantity: 1
                    })
                  }
                >
                  remove to cart
                </button>
                <Link href={`/store/${item.id}`}>
                  <Button>Ver produto</Button>
                </Link>
              </BoxStore>
            )
          })}

          <div>
            <CheckoutButton dados={cart} />
          </div>
          <div>
            <h2>Carrinho</h2>
            <p>você tem {amount} itens</p>
            <button onClick={() => deleteCart()}>Esvaziar carrinho</button>
          </div>
          <div>
            <h2>Itens no carrinho</h2>
            {cart.map(chave => {
              return (
                <div key={chave.price}>
                  <h2>{chave.price}</h2>
                  <p>quantidade : {chave.quantity}</p>
                </div>
              )
            })}
          </div>
        </main>
      </Size>
    </Container>
  )
}

export default Home
