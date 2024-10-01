// import React, { useState, useEffect } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import './phone.css';
// import { Button, TextField } from '@mui/material';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { auth } from '../firebase/firebase.config';

// function PhoneSignin() {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   useEffect(() => {
//     // Ensure reCAPTCHA is initialized once when the component mounts
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
//         'size': 'normal',
//         'callback': (response) => {
//           console.log('Recaptcha solved:', response);
//         },
//       }, auth);
//     }
//   }, []);

//   const sendOtp = async () => {
//     try {
//       const appVerifier = window.recaptchaVerifier;
//       const formattedPhone = `+${phone}`; // Ensure phone number is in E.164 format
//       const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
//       setConfirmationResult(confirmation); // Save the confirmation result for OTP verification
//       console.log('OTP sent successfully!');
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//     }
//   };

//   const verifyOtp = async () => {
//     if (!confirmationResult) {
//       console.log('No confirmation result, send OTP first.');
//       return;
//     }

//     try {
//       const result = await confirmationResult.confirm(otp);
//       console.log('User verified:', result.user);
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//     }
//   };

//   return (
//     <div className='phone-signin'>
//       <div className='phone-content'>
//         <PhoneInput
//           country={"us"}
//           value={phone}
//           onChange={setPhone}
//         />
//         <Button onClick={sendOtp} sx={{ marginTop: "10px" }} variant='contained'>
//           Get OTP
//         </Button>
//         <div id="recaptcha"></div> {/* reCAPTCHA widget will be rendered here */}
//         <br />
//         <TextField
//           style={{ marginTop: '10px', width: '300px' }}
//           variant='outlined'
//           size='small'
//           label="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />
//         <br />
//         <Button color='success' onClick={verifyOtp}>
//           Verify OTP
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default PhoneSignin;
