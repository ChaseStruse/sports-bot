import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sports Bot App</title>
        <meta name="description" content="Sports bot that can tell you scores and stats of your favorite sports" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Sports Bot App</h1>
        <div className={styles.screen}>
          <div className={styles.botText}>
            <p>Example bot text...</p>
          </div>
          <div className={styles.userInput}>
            <input type="text" id="userInput" name="userInput" />
          </div>
        </div>
      </main>

    </div>
  )
}
