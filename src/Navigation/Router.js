import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes} from 'react-router-dom';
import Links from '../Navigation/Links';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
// import Category from '../Pages/Category';


const Router1=()=>{
    return (<>
    <Links/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
    </Routes>
    </> )
}


export default Router1;
