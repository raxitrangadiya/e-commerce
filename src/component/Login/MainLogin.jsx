import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  let [formData,setFormdata]=useState({})
  let [loginMsg,setLoginmsg]=useState(false)
  const navigate = useNavigate();
  // data show 
  const setDataInFormState=(event)=>{
  setFormdata({...formData,[event.target.name]:event.target.value})
  }
  // store data in cookies
  const[cookies,setcooKie]=useCookies(['name'])
  // show a toast msg
  const showToastMessage  = () =>{
    // toast("jghvghv")
    toast.success('Login succesfull',{
      position:toast.POSITION.TOP_CENTER,
      autoClose:700
    })
    // console.log("toast done");
  } 
   const Login =async()=>{
   await  axios.get(`http://localhost:3004/users?username=${formData.username}&password=${formData.password}`)
    .then(function (response) {
      // handle succees
      if (response.data.length>0) {
        setcooKie('role_id',response.data[0].role_id);
        setcooKie('user_id:',response.data[0].id);
        setcooKie('username:',response.data[0].username);
        setcooKie('mail_id:',response.data[0].email);
         showToastMessage();
         if (response.data[0].role_id==1) {
        setTimeout(()=>{
            navigate("/admin/dashboard/admindashboard")
          },1500)
          // navigate("/admindashboard")
        } else {
          setTimeout(()=>{
            navigate("/")
          },1500)
        }
        // console.log("data set succesful in cookies");
        // setLoginmsg(false)
      } else {
        setLoginmsg(true)
      }
    // console.log("succesful msg ");
    //   console.log(response.data.length);
    //   console.log(response.data[0]);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      console.log(alert("enetr your username and password"));
    })
    .finally(function () {
      // always executed
    });
   }
  return (
    <MDBContainer fluid className="p-3 my-5  h-custom">
      <MDBRow>
        <MDBCol col='10' md='6'>
      <Link to="/"><MDBIcon fas icon="home" /></Link>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>
        <MDBCol className='mt-5 pt-5' col='4' md='6'>
        {/* {JSON.stringify(formData)} */}
          <MDBInput wrapperClass='mb-4' name='username' required onChange={setDataInFormState} label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' name='password' onChange={setDataInFormState} label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="/login">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={Login}>Login</MDBBtn>
            {loginMsg ?<span className='text-danger'>Invalid user </span>:""}
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account?&nbsp;&nbsp;<Link className='link-danger' to="/register">Register</Link></p>
    
          </div>

        </MDBCol>

      </MDBRow>

      <ToastContainer />
    </MDBContainer>
  );
}

export default App;