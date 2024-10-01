import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import './phone.css';
import {Button,TextField} from '@mui/material';
import { RecaptchaVerifier, signInWithPhoneNumber, } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

function PhoneSignin(){
    const[phone,setPhone]=useState("");
    const sendOtp=()=>{
        try{
            const recaptcha = new RecaptchaVerifier("recaptcha-container",{},auth);
            recaptcha.render();
            const confirmation = signInWithPhoneNumber(auth,phone,recaptcha);
            console.log(confirmation)
        }catch(err){
            console.log(err)
        }
        console.log(phone);
    }
    return(
        <div className='phone-signin'>
            <div className='phone-content'>
                <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                />
                <Button onClick={sendOtp}sx={{marginTop:"10px"}}variant='primary'>Get OTP</Button>
                <div id="recaptchaVerifier"/>
                <br/>
                <TextField style={{ marginTop: '10px', width: '300px' }} variant='outlined' size='small' label="Enter OTP"/>
                <br/>
                <Button color='success'>Verify OTP</Button>
            </div>
            {/* <input placeholder='Enter OTP'/> */}
            
            
            
        </div>
    )
}
export default PhoneSignin;