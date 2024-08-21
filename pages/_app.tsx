import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../styles/style.css"
import "../styles/bootstrap.min.css"
import "../main"
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function App({ Component,  pageProps }: AppProps) {
  return (
   
    <div className="app">
      <Header/>
      {/* <ToastContainer/> */}
      <Component {...pageProps} />
      <Footer/>
      
    </div>
  );
}
