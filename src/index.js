import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css';
import Calcu from './component/CarbonFootprint.jsx';
import PhoneSignin from './component/signing.jsx';
import { BrowserRouter} from 'react-router-dom';
import Router1 from './Navigation/Router';
import Quiz from './Pages/Quiz.js';



ReactDOM.render(
  <>
    {/* <BrowserRouter>
      <Router1/>
    </BrowserRouter> */}

    <Quiz/>
    {/* <PhoneSignin/> */}
    {/* <App/> */}
    {/* <Tempapp/>
    <EnergyDashboard/> */}
  </>,document.getElementById("root")
);

