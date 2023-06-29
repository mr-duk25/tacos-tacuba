import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { update } from "../../utilities/events-api";
import handleSubmit  from "../EventForm/EventForm";
import handleChange  from "../EventForm/EventForm";
import { findDetails } from "../../utilities/events-api";
import * as eventsAPI from "../../utilities/events-api"
import { useNavigate } from "react-router-dom";

export default function EditForm() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [event, setEvent] = useState({})

    useEffect (function () {
        async function getDetails() {
            const details = await findDetails(id)
            setEvent(details)
            console.log(details)
        } 
        getDetails();
     }, [])

     function handleChange(evt) {
        setEvent({...event, [evt.target.name]: evt.target.value})
        console.log(event)
      }

      async function handleSubmit(evt) {
        evt.preventDefault()
        const updateEvent = await eventsAPI.update(id, event)
        navigate(`/events/${updateEvent._id}/details`)
        console.log(updateEvent)
       }
    return (
        <>
         <div>
      <div className="form-container">
        <h1>Edit Form</h1>
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
            <select name="servingTimeAMPM" value={event.servingTimeAMPM} onChange={handleChange} required >
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
          <button type="submit">Update Event Request</button>
        </form>
      </div>
    </div>
        </>
    )
} 