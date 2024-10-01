// import React,{useState} from 'react';
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-input-2';
// import { Button } from 'bootstrap';
// // import Form from 'react-bootstrap/Form';

// const PhoneSignUp = () =>{
//     const [number,setNumber]=useState("");
//     const getOTP =(e)=>{
//         e.preventDeafault();
//         console.log(number);
//     }
//     return(
//         <> 
//         <div>
//             <Form onSubmit ={getOTP}>
//                 <Form.Group className="mb-3" >
//                     <PhoneInput defaultCountry="US" value={number} onChange={setNumber}/>
//                 </Form.Group>
//                 <Button>SendOTP</Button>
//             </Form>
//         </div>
//         </>
//     );
// };
// export default PhoneSignUp;