import React, { useEffect, useState } from 'react'
import LoginPopup from './LoginForm'
import Image from 'next/image';
import usericon from "../public/images/user.png"
import carticon from "../public/images/cart.png"

const header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="container-fluid ">
            <div className="container ">
                <nav className="navbar navbar-light  navbar-expand-xl">
                    <a href="/home" className="navbar-brand"><h1 className="text-primary display-6">MangoHub</h1></a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarCollapse">
                        <div className="navbar-nav mx-auto gap-3 ">
                            <a href="/home" className="nav-item nav-link  ">Home</a>
                            <a href="" className="nav-item nav-link">Shop</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <a href="/contact" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="d-flex m-2 me-5">
                        <form className="d-flex">
        
      </form>
                            <a href="/cart" className="position-relative me-4 my-auto align-middle">
                            <Image src={carticon} width={30} height={30} alt='' />
                                <span className=" cart position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1 ">3</span>
                            </a>
                            <button onClick={openPopup} className='border-0 bg-transparent' ><Image src={usericon} width={30} height={30} alt='' /></button>
                            <LoginPopup isOpen={isPopupOpen} onClose={closePopup} /> 
                                
                            
                        </div>
                    </div>
                </nav>
            </div>
            <div>
            
        </div>
        </div>
       
        
  )
}

export default header