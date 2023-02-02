import React,{ useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  import { auth, signInWithGoogle, registerWithEmailAndPassword } from "../firebase";
  import {Link, useNavigate, useHistory} from "react-router-dom";
  import { useAuthState } from "react-firebase-hooks/auth";



function Registration(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/user");
  }, [user, loading]);
        return(
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-2' value={email} onChange={(e) => setEmail(e.target.value)} label='Email address' id='form11' type='email'/>
      <MDBInput wrapperClass='mb-2' value={password} onChange={(e) => setPassword(e.target.value)} label='Password' id='form2' type='password'/>
      <MDBInput wrapperClass='mb-2' value={name} onChange={(e) => setName(e.target.value)} label='Full name' id='form3' type='text'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <Link to="/reset">Forgot password?</Link>
      </div>

      <MDBBtn className="mb-4" onClick={register}>Sign up</MDBBtn>

      <div className="text-center">
        <p>Already have an account? <a href="./LoginForm">Login</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' onClick={signInWithGoogle} color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
        )
    }

export default Registration;
// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link, useHistory } from "react-router-dom";
// import {
//   auth,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
// } from "./firebase";
// import "./Register.css";
// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const history = useHistory();
//   const register = () => {
//     if (!name) alert("Please enter name");
//     registerWithEmailAndPassword(name, email, password);
//   };
//   useEffect(() => {
//     if (loading) return;
//     if (user) history.replace("/dashboard");
//   }, [user, loading]);
//   return (
//     <div className="register">
//       <div className="register__container">
//         <input
//           type="text"
//           className="register__textBox"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Full Name"
//         />
//         <input
//           type="text"
//           className="register__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="register__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button className="register__btn" onClick={register}>
//           Register
//         </button>
//         <button
//           className="register__btn register__google"
//           onClick={signInWithGoogle}
//         >
//           Register with Google
//         </button>
//         <div>
//           Already have an account? <Link to="/">Login</Link> now.
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Register;

