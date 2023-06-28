import { useState, useEffect } from 'react';
import { findDetails } from '../../utilities/events-api';
import { useParams } from 'react-router-dom';





export function EventDetailsPage() {
    const {id} = useParams()
    const [event, setEvent] = useState({

    })
  
     useEffect (function () {
        async function getDetails() {
            console.log('yooo')
            const details = await findDetails(id)
            setEvent(details)
            console.log(details)
        } 
        getDetails();
     }, [])
    return (
        <>
        <h1>Details Page</h1>
       <p>{event.name}</p>
  
        </>

    )
    
}