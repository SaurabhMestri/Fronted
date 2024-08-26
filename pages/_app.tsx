import "@/styles/globals.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/footer";
import "../styles/style.css"
import "../styles/bootstrap.min.css"
import "../main"
import '../styles/lib/lightbox/css/lightbox.min.css'
import '../styles/lib/owlcarousel/assets/owl.carousel.min.css'
import LoginPopup from "@/components/LoginForm";

// import 'bootstrap/dist/css/bootstrap.min.css';



export default function App({ Component,  pageProps }: AppProps) {
  
  return (
   
    <div className="app">
      {/* <ToastContainer/> */}
      <Component {...pageProps} />
      <Footer/>
      
    </div>
  );
}
