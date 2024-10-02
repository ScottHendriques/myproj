import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


const Links=()=>{
    <>
    <Link exact path='/'>Home</Link>
    <Link path='/Login'>Login</Link>
    <Link path='/Register'>Register</Link>
    </>
}
export default Links;
