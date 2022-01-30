import axios from 'axios';

// Courier
export default axios.create({
  baseURL: 'https://localhost:5001/api/',
  params: {},
});
