import Head from 'next/head'

import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'

import Sidebar from '@/components/Sidebar'
import Chat from '@/components/Chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Личный кабинет</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <Sidebar />
          <Chat />
        </div>
      </main>
    </>
  )
}
