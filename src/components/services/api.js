import axios from "axios";
// const chave = 'bc75c6fd509747bea0c609f87e2384b1fbcbc966f70d20560879be63a664a31e';


const api = axios.create({
    baseURL:'https://api.sympla.com.br/public/v4/events',
    headers:{
        's_token': 'bc75c6fd509747bea0c609f87e2384b1fbcbc966f70d20560879be63a664a31e'
    }
})

export default api;