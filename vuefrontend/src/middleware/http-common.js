import Vue from 'vue'
import axios from "axios";

const baseURL = "http://localhost:8000/api";
Vue.prototype.$axios = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json"
  }
});