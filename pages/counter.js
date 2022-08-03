import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Counter.module.css';

export default function Counter() {
  const [Number, setNumber] = useState(0);
  const [numColor, setNumColor] = useState('black');

  useEffect(() => {
    changeColor();
  }, [Number]);

  function Increase() {
    setNumber(Number + 1);
  }
  function Decrease() {
    setNumber(Number - 1);
  }
  function changeColor() {
    if (Number > 0) {
      setNumColor('Green');
    } else if (Number < 0) {
      setNumColor('red');
    } else {
      setNumColor('black');
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Counter</title>
      </Head>

      <main className={styles.main}>
        <h1 style={{ color: `${numColor}` }}>{Number}</h1>
        <div className="btnContainer">
          <button className="btn" onClick={Decrease}>
            DECREASE
          </button>
          <button className="btn" onClick={Increase}>
            INCREASE
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created by&nbsp;<b>Gift Banda</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
