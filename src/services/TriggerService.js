import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.github.com/search`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getRepos(lastMonth, page) {
    return apiClient.get('/repositories?q=created:%3E'+lastMonth+'&page='+page+'&sort=stars&order=desc');
  },
  
}
