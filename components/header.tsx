import React, { useEffect, useState } from 'react'
import LoginPopup from './LoginForm'
import Image from 'next/image';
import usericon from "../public/images/user.png"
import carticon from "../public/images/cart.png"
import menuicon from "../public/images/menu.png"
import Link from 'next/link';
type Props = {}
const navLinks = [
    { name: "Home", id: "home" },
    { name: "Shop", id: "shop" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" }
]

const header = (props:Props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };


    return (
        <div className="container-fluid ">
            <div className="  pt-3 pb-3 ">
                <div className=" d-flex justify-content-between   ">
                    <a href="/home" className="navbar-brand"><h1 className="text-primary display-6">MangoHub</h1></a>

                    <div className="d-flex gap-4" id="navbarCollapse">
                        <div className="nav-links">
                            {navLinks?.map((link) => (
                                <Link key={link.id} href={`/${link.id}`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="d-flex  ">
                            <a href="/cart" className="position-relative me-4 my-auto align-middle">
                                <Image src={carticon} width={30} height={30} alt='' />
                                <span className=" cart position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1 ">3</span>
                            </a>
                            <button onClick={openPopup} className='border-0 bg-transparent' ><Image src={usericon} width={30} height={30} alt='' /></button>
                            <LoginPopup isOpen={isPopupOpen} onClose={closePopup} />
                            <div onClick={openSidebar} 
                            
                            className="nav-menu">
                                <Image src={menuicon} width={30} height={30} alt="" />
                            </div>
                            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                                <div onClick={closeSidebar} className="close-icon">
                                    x
                                </div>
                                <div className="sidebar-links ">
                                    {navLinks?.map((link) => (
                                        <Link key={link.id} onClick={closeSidebar} href={`/${link.id}`}>
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>


    )
}

export default header