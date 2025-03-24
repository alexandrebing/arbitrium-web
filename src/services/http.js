import axios from 'axios'

if (process.env.API_SERVER)
  var apiServer = process.env.API_SERVER
else
  var apiServer = 'https://alexandrebing.com.br/arbitrium-api'

const client = axios.create({
  baseURL: apiServer,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

export default client
