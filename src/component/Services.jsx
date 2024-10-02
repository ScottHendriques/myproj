import React from "react";
import img1 from "../Images/carbonfoot.webp";
import img2 from "../Images/blog.png";
import img3 from "../Images/quiz.png";
const Services=()=>{
    return(
        <div>
            <section id="services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4">Get Started <b>Now</b></h1>
                            <hr className="w-25 mx-auto"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card p-3 align-items-center">
                                <img id='ser' src={img1} className="card-img-top"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Carbon Footprint Calculator</h5>
                                    <p className="card-text lead">
                                    You can easily assess the environmental impact of 
                                    your daily activities and discover personalized 
                                    strategies for improvement. 
                                    </p>
                                    <a href="#" className="btn btn-primary">Check this out</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3 align-items-center">
                                <img id='ser' src={img2} className="card-img-top"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Blogs & Posts</h5>
                                    <p className="card-text lead">
                                    We believe that sustainability should be both practical 
                                    and achievable for everyone. That’s why we 
                                    feature DIY blogs and creative projects focused 
                                    on reusing materials, reducing waste, and making 
                                    environmentally friendly choices in everyday life.
                                    </p>
                                    <a href="#" className="btn btn-primary">Check this out</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3 align-items-center">
                                <img id='ser' src={img3} className="card-img-top"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Quiz & Awareness</h5>
                                    <p className="card-text lead">
                                    Engaging quizzes raise awareness about energy conservation 
                                    and sustainable living, offering valuable tips to 
                                    make small changes that have a big impact.
                                    </p>
                                    <a href="#" className="btn btn-primary">Check this out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Services;