import React from 'react'

const contact = () => {
  return (
    <div className="container-fluid contact py-5 mt-5">
            <div className="container py-5 ">
                <div className="p-5 bg-light rounded">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="text-center mx-auto px-5" /*style="max-width: 700px;"*/>
                                <h1 className="text-primary">Get in touch</h1>
                                
                            </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="ratio ratio-16x9">
                             <iframe src="https://www.google.com/maps/d/edit?mid=10LYq4ilDicKYyrw5qklrzZbRI5U5WR0&usp=sharing"  loading="lazy" ></iframe>
                               </div>
                        </div>
                        <div className="col-lg-7">
                            <form action="" className="">
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name"></input>
                                <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email"></input>
                                <textarea className="w-100 form-control border-0 mb-4" /*</input>rows="5" cols="10"*/ placeholder="Your Message"></textarea>
                                <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-2"></p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">info@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded bg-white">
                                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-2">(+012) 3456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default contact