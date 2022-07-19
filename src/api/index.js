import axios from "axios";
//mock API
let API_URL = "https://innovance-server.herokuapp.com/";
export default async function callApi(endpoint, method = "GET", body) {
  try {
    return await axios({
      method,
      url: `${API_URL}/${endpoint}`,
      data: body,
    });
  } catch (err) {
    console.log(err);
  }
}
