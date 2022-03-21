import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layout'
import styles from '../styles/Home.module.css'

const Homepage: React.FC = () => {
  return (
    <Layout>
      Here is my page that will be surrounded by my layout.
    </Layout>
  )
}

export default Homepage;
