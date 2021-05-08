/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Head from 'next/head'
function Success() {
  return (
    <div>
      <Head>
        <title>Levir Store - error </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <img width={200} height={200} src="/success.svg" alt="" />
          <h2>Parabens pela Compra !</h2>
        </div>
      </main>
    </div>
  )
}

export default Success
