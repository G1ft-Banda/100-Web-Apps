import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>100 Web Apps</title>
      </Head>
      <header>
        <h1>100 Web Apps</h1>
      </header>
      <main className={styles.main}>
        <ol>
          <li>
            <Link href="/counter">Counter App</Link>
          </li>
        </ol>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created by&nbsp;<b>Gift Banda</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
