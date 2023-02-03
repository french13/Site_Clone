import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { homeBgVideo } from '../public/assets/imgSrc'


const Home: NextPage = () => {
  return (
    <Layout>
    <div style={{ backgroundColor: "black" }}>
      <video autoPlay muted playsInline loop>
        <source src={homeBgVideo} type='video/mp4' />
      </video>
    </div>
    </Layout>
  )
}

export default Home
