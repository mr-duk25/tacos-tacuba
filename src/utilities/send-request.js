import { getToken } from "./users-service";

export default async function sendRequest(url, method = 'GET', payload = null) {
// fetch accepts an options object as the 2nd argument
// used to include a datapayload, set headers, specify the ,ethod, etc.
const options = { method };
if (payload) {
options.headers = { 'Content-Type': 'application/json' };
options.body = JSON.stringify(payload);
} 
const token = getToken();
if (token) {
    // need to add an Authorization header
    // Use the logical or assignment operator
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
}
const res = await fetch(url, options);
// if res.ok then something went wrong
if (res.ok) return res.json();
throw new Error('Bad Request');
}