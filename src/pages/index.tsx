import React from 'react'
import Head from 'next/head'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Container, SliderBox } from '../styles/pages/Home'
import properties from '../styles/slideConfig'
import NewSideBar from '../components/NewSideBar'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <NewSideBar />
      <div>
        <Slide {...properties}>
          <SliderBox>First</SliderBox>
          <SliderBox>Second</SliderBox>
          <SliderBox>Third</SliderBox>
        </Slide>
      </div>
      <h1>ReactJS Template</h1>
      <p>A ReactJS + Next.js Template.</p>
    </Container>
  )
}

export default Home
