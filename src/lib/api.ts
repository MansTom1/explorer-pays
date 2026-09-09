import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.restcountries.com/countries/v5',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
  },
})
