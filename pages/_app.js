import "../styles/globals.scss";
import { AppProvider } from "../context";
import Header from "../components/header";
import ThemeProvider from "../components/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
