import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import Feed from '../src/components/Feed'
import UploadModal from '../src/components/UploadModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
        <Feed/>
        <UploadModal/>
    </>
  )
}
