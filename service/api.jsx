import axios from "axios";
export const api = axios.create({
  // eslint-disable-next-line no-undef
  //baseURL: process.env.REACT_APP_PRODUCTION_BASE_URL,
  //headers: { "Access-Control-Allow-Origin": "*" },
});

// baseURL so far: localhost:8080/api/
