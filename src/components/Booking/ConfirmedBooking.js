import { useNavigate } from 'react-router-dom';
import React from 'react'
import './Form.css';

 function ConfirmedBooking() {
  const navigate = useNavigate();
  return (
    <section className='reservations-main'>
      <div className='reservations'>
        <h2>Success</h2>
        <h3>Your reservation was received!</h3>
        <h4 className='confirmation-text'> Thank you for reserving table with us.
        <br></br>
          Confirmation is sent to email provided in reservation form.
        <br></br>
            Please make sure to arrive prior to start of your reservation.</h4>
      <button onClick={() => {
        navigate("/")
        }} aria-label="On Click" className='home-btn'>Return Home</button>
        </div>
    </section>
  )
}

export default ConfirmedBooking