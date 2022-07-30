import axios from "axios";

let API_URL = "https://innovance-server.herokuapp.com";

const callApi = async (endpoint, method = "GET", body) => {
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

export default callApi;
