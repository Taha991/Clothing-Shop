import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button}from "../components/elements/Button"
import { Banner } from '../components/Banner'


export default function Home() {
  return (
    <div className={styles.container}>
      <Banner/>
    </div>
  )
}
