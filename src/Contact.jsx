import React, { useState } from 'react';
import DateS from './DateS';


const Contact = () => {
 const compicon = "🖥️";
  const[data,setData]=useState({
    fullname:"",
    phone:"",
    email:"",
    message:"",
  });

  const inputEvent = (event) =>{
    const{name,value}=event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })
  }

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`${compicon}My Contact us details${compicon}
     Name = ${data.fullname},
     phone = ${data.phone},
     email = ${data.email},
     Message = ${data.message}.
    `)

  }
  

  return(
  <>
   <div className="my-5">
     <h1 className="text-center">Contact Us</h1>
     <p className="text-center"><DateS/></p>
   </div>
   <div className="container contact_div">
    <div className="row">
      <div className="col-md-6 col-10 mx-auto">
      <form onSubmit={formSubmit}>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your phone No. " required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={inputEvent}  required></textarea>
</div> 
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>       
      </form>
      </div>
    </div>
   </div>
  </>);
}



export default Contact;
