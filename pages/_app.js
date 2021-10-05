import "tailwindcss/tailwind.css";
import { Layout } from "@ui";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
