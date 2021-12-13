import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span className={styles.subscriptionPrice}>
              {' '}
              {product.amount}
              {' '}
              per month
            </span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img className={styles.banner} src="/images/girl-coding.svg" alt="girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K62akJM9ImgPs8NEue6P8f4', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
