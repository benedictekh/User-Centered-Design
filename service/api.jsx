import axios from "axios";
export const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: "localhost:8080/api/",
  //headers: { "Access-Control-Allow-Origin": "*" },
});

// baseURL so far: localhost:8080/api/

//import { getAllShops } from '../../service/allApiCalls';
