import '../styles/globals.scss'
import {AppProvider} from "../context"
import Header from "../components/header";
import Cursor from "../components/Cursor"

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Header/>
    <Cursor/>
    <Component {...pageProps} />
  </AppProvider>
}

export default MyApp
