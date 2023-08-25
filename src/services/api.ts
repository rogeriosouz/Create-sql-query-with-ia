import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`
  }
})
//gpt-3.5-turbo
export { api }