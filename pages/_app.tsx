import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../styles/style.css"
import "../styles/bootstrap.min.css"
import "../main"
import '../styles/lib/lightbox/css/lightbox.min.css'
import '../styles/lib/owlcarousel/assets/owl.carousel.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';



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
