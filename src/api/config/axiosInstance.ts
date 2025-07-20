import axios from 'axios'

// Axios instance for API requests
export const axiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`,
  },
  timeout: 15000,
})
