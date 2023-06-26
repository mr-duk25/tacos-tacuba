import { useState } from 'react';
import error from '../../components/LoginForm/LoginForm';



export default function NewEvent({}) {
    const [event, setEvent] = useState();
    
    function handleSubmit() {
      return (
        console.log('submit')
        )}
        
    function handleChange(evt) {
      return (
        setEvent(evt.target.value)
        )}


    return (
        <>
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={event} onChange={handleChange} required />
          <label>Phone No.</label>
          <input type="number" name="phone" value={event} onChange={handleChange} required />
          <label>Email</label>
          <input type="text" name="email" value={event} onChange={handleChange} required />
          <label>Address</label>
          <input type="text" name="address" value={event} onChange={handleChange} required />
          <label>Type of Event</label>
          <input type="text" name="eventType" value={event} onChange={handleChange} required />
          <label>Number of Guests</label>
          <input type="text" name="numOfGuests" value={event} onChange={handleChange} required />
          <label>Date</label>
          <input type="date" name="date" value={event} onChange={handleChange} required />
          <label>Serving Time</label>
          <input type="text" name="servingTime" value={event} onChange={handleChange} required />
          <label>Meal Package</label>
          <input type="enum" name="mealPackage" value={event} onChange={handleChange} required />
          <button type="submit">Submit Event Request</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
        </>
    )
}

