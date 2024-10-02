import React from "react";
import img1 from '../Images/abtus.jpg'
const About=()=>{
    return(
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img1} className="w-75 mt-5 py-5"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About us</h3>
                            <h1 className="display-6 mb-2">Who<b> We</b> Are</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">
                            At Green Pathways, we are passionate about empowering individuals to take meaningful steps toward a
                             more sustainable future. Our mission is to provide accessible tools and resources that help you reduce
                              your carbon footprint, embrace energy-saving practices, and live a more eco-conscious life.<br/>
                              Green Pathways is your guide to a greener lifestyle, inspiring you to make informed decisions for
                             a healthier planet. Together, we can create a future where sustainability is second nature.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;