import sendRequest from './send-request'
const   BASE_URL = '/api/events';

        
    export async function create(event) {
      return sendRequest(BASE_URL, 'POST', {event});
    }

    export async function findDetails(id) {
      return sendRequest(`${BASE_URL}/${id}`, 'GET');
    }