import sendRequest from './send-request'
const   BASE_URL = '/api/events';

        
    export async function create(event) {
      return sendRequest(BASE_URL, 'POST', {event});
    }
    
    export async function findDetails(id) {
      return sendRequest(`${BASE_URL}/${id}`, 'GET');
    }
    
    export async function edit(id) {
      console.log(id)
      return sendRequest(`${BASE_URL}/${id}`, 'GET');
    }

    export async function update(id, event) {
      return sendRequest(`${BASE_URL}/${id}`, 'PUT', {event});
    }
    
    export async function deleteEvent(id) {
      return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
    }
    
    
    