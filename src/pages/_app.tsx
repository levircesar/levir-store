import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import NewSideBar from '../components/NewSideBar'
import { CartContextProvider } from '../contexts/CartContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <NewSideBar />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </CartContextProvider>
  )
}

export default MyApp
