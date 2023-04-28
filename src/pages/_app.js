import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '@/styles/globals.css'
import { useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}
