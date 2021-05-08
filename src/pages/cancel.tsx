/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Head from 'next/head'
function Cancel() {
  return (
    <div>
      <Head>
        <title>Levir Store - error </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <img width={200} height={200} src="/cancel.svg" alt="" />
          <h2>Ops... Sua compra foi cancelada</h2>
        </div>
      </main>
    </div>
  )
}

export default Cancel
