import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dev News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.textContent}>
          <span>👏 Hey, welcome!</span>
          <h1>
            News about the
            {' '}
            <span>coding</span>
            {' '}
            world!
          </h1>
          <p>
            Get access to all publications
            <br />
            for
            <span className={styles.subscriptionPrice}> $9.99 per month</span>
          </p>
        </section>
        <img className={styles.banner} src="/images/girl-coding.svg" alt="girl coding" />
      </main>
    </>
  );
}
