import '@/../styles/globals.css';
import dynamic from 'next/dynamic';

const NonSSRWrapper = ({ children }) => <>{children}</>;

const ComponentWithNoSSR = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ComponentWithNoSSR>
        <Component {...pageProps} />
      </ComponentWithNoSSR>
    </>
  );
};

export default App;
