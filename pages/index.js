import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>100 Web Apps</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className="emphasis">100 Web App</span>
        </h1>

        <p className={styles.description}>
          This is a directory of Web App I built for the fun of it.
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created by&nbsp;<b>Gift Banda</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
