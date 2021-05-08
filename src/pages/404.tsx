/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Head from 'next/head'
function error() {
  return (
    <div>
      <Head>
        <title>Levir Store - error </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <img width={200} height={200} src="/404.svg" alt="" />
          <h2>Ops... Não Encontramos essa página</h2>
        </div>
      </main>
    </div>
  )
}

export default error
