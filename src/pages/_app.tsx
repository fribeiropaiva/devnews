import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import '../styles/global.scss';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
