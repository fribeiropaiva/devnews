import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dev News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.textContent}>
          <span className={styles.welcome}>👏 Hey, welcome!</span>
          <h1 className={styles.presentation}>
            News about the
            {' '}
            <span>coding</span>
            {' '}
            world!
          </h1>
          <p className={styles.callToAction}>
            Get access to all publications
            <br />
            for
            <span className={styles.subscriptionPrice}> $9.99 per month</span>
          </p>
          <SubscribeButton />
        </section>
        <img className={styles.banner} src="/images/girl-coding.svg" alt="girl coding" />
      </main>
    </>
  );
}
