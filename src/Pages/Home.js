import React from "react";
import '../Pages/Home.css';
import imgs from "../Images/bg.jpeg";
import Navbar from "../Navigation/NavBar";
import About from "../component/About";
import Services from "../component/Services";

const Home=()=>{
    return(
        <div>
            <section id='home' style={{backgroundImage:`url(${imgs})`}}>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-12 mt-5 ">
                            <h1 className="display-2 fw-bolder mb-4 text-center text-white pt-10">Green Pathways</h1>
                            <div className="button d-flex flex-row-reverse">
                                <p><br/><br/><br/><br/></p>
                            </div>
                            <div class="d-flex align-items-end flex-column text-white">
                                <div class="p-2"><h3 className="display-5"><b><i>Our Moto</i></b></h3></div>
                                <div class="p-2 display-6"><b>Empowering You</b> to Tread Lightly</div>
                                <div class="p-2 display-6"><i>Measure,Learn & Live Sustainably</i></div>
                                <br></br>
                            </div>
                            <div className="button d-flex flex-row-reverse">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2 ">Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Navbar/>
            <About/>
            <Services/>
        </div>
    )

}

export default Home;