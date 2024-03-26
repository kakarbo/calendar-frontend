import axios from "axios";


const { VITE_API_URL } = getEnvVariables()


const calendarAPi = axios.create({
    baseURL: VITE_API_URL
})


// Todo: configurar interceptores


export default calendarAPi
