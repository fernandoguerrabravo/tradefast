import axios from 'axios';
import { apiKey } from './keys.helper';

class HttpClientHelper {
  static baseHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    Authorization: apiKey
  }
}

axios.interceptors.request.use(
  (config) => {
    config.headers = Object.assign(
      config.headers,
      HttpClientHelper.baseHeaders
    )
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const HttpClient = axios
