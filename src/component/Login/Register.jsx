import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// set data in state
function App() {
let [formData,setFormdata]=useState({})
const setDataInFormState=(event)=>{
setFormdata({...formData,[event.target.name]:event.target.value})
}
// set data in api on signup 
const Registration=async()=>{
    if (formData="") {
        console.log(alert("fill data"));
    } else {
        alert ("done !!!")
    }
    await fetch('http://localhost:3004/users',{
        method:'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(formData)
    }).then(res=>{return res.json()}).then((result)=>{
        setFormdata({})
        console.log("form data",formData);
    })
}
console.log(formData);
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>
        <MDBCol className='mt-5 pt-5' col='4' md='6'>
{JSON.stringify(formData)}
          <MDBInput name='username' wrapperClass='mb-4' required onChange={setDataInFormState} label='User name' id='formControlLg' type='name' size="lg"/>
          <MDBInput name='email' wrapperClass='mb-4' required onChange={setDataInFormState} label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput name='password' wrapperClass='mb-4' required onChange={setDataInFormState} label='Password' id='formControlLg' type='password' size="lg"/>
          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5 " size='lg' onClick={Registration}>Sign up</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2"> have an account? <Link className='link-danger' to="/login">Login</Link></p>
          </div>

        </MDBCol>

      </MDBRow>


    </MDBContainer>
  );
}

export default App;