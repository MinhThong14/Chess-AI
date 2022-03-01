import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL;

export const fetchAPI = async (endpoint, method, data) => {
  if (endpoint[0] !== "/") {
    endpoint = "/" + endpoint;
  }

  const config = {
    method: method,
    url: `${baseURL}${endpoint}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (method === "GET") {
    config.params = data;
  } else if (method === "POST") {
    config.data = data;
  }

  try {
    const res = await axios(config)
    return res.data;
  } catch (err) {
    throw err;
  }
};
