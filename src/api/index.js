import axios from 'axios';
//mock API
let API_URL = 'http://localhost:3004';
   export default async function callApi(endpoint, method = 'GET', body) {
       try {
           return await axios({
               method,
               url: `${API_URL}/${endpoint}`,
               data: body
           });
       } catch (err) {
           console.log(err);
       }
}