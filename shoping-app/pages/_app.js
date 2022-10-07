import '../styles/globals.css'
import {Header} from "../components/navigation/Header"
import {CartProvider} from "../context/cart-context"

function MyApp({ Component, pageProps }) {
  return(
  <>
  <CartProvider>
  <Header/>
  <Component {...pageProps} />
  </CartProvider>

  </>
  )
  
}

export default MyApp
