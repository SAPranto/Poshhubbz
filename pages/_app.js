import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Footer from '../components/Footer'
import { AiFillCloseCircle } from "react-icons/ai";

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp