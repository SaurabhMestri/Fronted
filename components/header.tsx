import React, { useState } from 'react'
import LoginPopup from './LoginForm'

const header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className="container-fluid">
            <div className="container px-0 ">
                <nav className="navbar navbar-light  navbar-expand-xl">
                    <a href="/home" className="navbar-brand"><h1 className="text-primary display-6">MangoHub</h1></a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="/home" className="nav-item nav-link active">Home</a>
                            <a href="" className="nav-item nav-link">Shop</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="cart.html" className="dropdown-item">Cart</a>
                                    <a href="chackout.html" className="dropdown-item">Chackout</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="/contact" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="d-flex m-2 me-5">
                        <form className="d-flex">
        <input className="form-control me-2 border-0 bg-transparent " type="search" placeholder="Search content here" aria-label="Search"></input>
        <button className="btn btn-outline-success me-3" type="submit">Search</button>
      </form>
                            <a href="/cart" className="position-relative me-4 my-auto align-middle">
                            <i className="fas fa-shopping-cart fa-2x"></i>
                                <span className=" cart position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1 ">3</span>
                            </a>
                            <button onClick={openPopup} className='border-0 bg-transparent' ><i className="fas fa-user fa-2x"></i></button>
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