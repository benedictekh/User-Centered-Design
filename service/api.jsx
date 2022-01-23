import axios from "axios";

const BASE = "http://34.78.106.8:8080/api/";
export const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: "http://34.78.106.8:8080/api/",
});

// baseURL so far: localhost:8080/api/

//import { getAllShops } from '../../service/allApiCalls';
