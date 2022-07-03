import axios from 'axios'


const api = axios.create({
    baseURL:'https://margulan.herokuapp.com/'
})

export default api
