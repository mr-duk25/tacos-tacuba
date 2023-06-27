import { useState } from 'react';
import error from '../../components/LoginForm/LoginForm';
import * as eventsAPI from '../../utilities/events-api';
import NewEventRequest from '../NewEventRequest/NewEventRequest';

export default function NewEvent({}) {
    const [event, setEvent] = useState({
    
      name: '',
      phone: '',
      email: '',
      address: '',
      eventType: '',
      numOfGuests: '',
      date: '',
      servingTime: '',
      mealPackage: ''
    });
    
    async function handleSubmit(evt) {
      evt.preventDefault()
      const newEvent = await eventsAPI.create(event)
      console.log(newEvent)
     }
        
    function handleChange(evt) {
      setEvent({...event, [evt.target.name]: evt.target.value})
      console.log(event)
    }
       


    return (
        <>
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={event.name} onChange={handleChange} required />
          <label>Phone No.</label>
          <input type="number" name="phone" value={event.phone} onChange={handleChange} required />
          <label>Email</label>
          <input type="text" name="email" value={event.email} onChange={handleChange} required />
          <label>Address</label>
          <input type="text" name="address" value={event.address} onChange={handleChange} required />
          <label>Type of Event</label>
          <input type="text" name="eventType" value={event.eventType} onChange={handleChange} required />
          <label>Number of Guests</label>
          <input type="text" name="numOfGuests" value={event.numOfGuests} onChange={handleChange} required />
          <label>Date</label>
          <input type="date" name="date" value={event.date} onChange={handleChange} required />
          <label>Serving Time</label>
          <div>
            <select name="servingTime" value={event.servingTime} onChange={handleChange} required >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
            </select>
            <select name="servingTime" value={event.servingTime} onChange={handleChange} required >
                <option value={'AM'}>AM</option>
                <option value={'PM'}>PM</option>
            </select>

          </div>
          <label>Meal Package</label>
          <select type="enum" name="mealPackage" value={event.mealPackage} onChange={handleChange} required>
            <option value={'The Classic Plate'}>The Classic Plate</option>
            <option value={'The Tijaunero Plate'}>The Tijaunero Plate</option>
            <option value={'The Veggie Plate'}>The Veggie Plate</option>
            <option value={'The Custom Plate'}>The Custom Plate</option>
            </select>
          <button type="submit">Submit Event Request</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
    <div>
      <NewEventRequest />
    </div>
        </>
    )
}

