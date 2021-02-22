import axios from 'axios'

const api = axios.create({
  baseURL: 'https://6032fd2aa223790017acf8cd.mockapi.io/api/v1'
})

export default api
