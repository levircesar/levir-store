import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />

          <link rel="icon" href="http://localhost:3000/favicon.png" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta name="author" content="Levir César Ribeiro Lemos" />
          <meta
            name="description"
            content="Seja muito bem vindo ao meu site pessoal, me chamo Levir Cesar Ribeiro Lemos e sou estudante de engenharia de computação na UFC"
          />
          <meta
            name="keywords"
            content=",levir cesar ribeiro lemos,levir cesar, levir lemos, engenheiro de computação,desenvolvimento web,seo,marketing digital,programação,web design,front-end,web developer,back-end,php"
          />
          <meta name="robots" content="index,follow" />
          <meta name="theme-color" content="#483079" />
          <meta name="format-detection" content="telephone=no" />
          <meta property="og:title" content="Levir Lemos | Website" />
          <meta property="og:site_name" content="Levir Lemos | Website" />
          <meta
            property="og:description"
            content="Seja muito bem vindo ao meu site pessoal, me chamo Levir Cesar Ribeiro Lemos e sou estudante de engenharia de computação na UFC"
          />
          <meta
            property="og:url"
            content="https://portifolio-next-omega.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://portifolio-next-omega.vercel.app/favicon.png"
          />
          <meta property="og:image:type" content="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
