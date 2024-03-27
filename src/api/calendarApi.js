import axios from "axios";
import { getEnvVariables } from "../helpers";


const { VITE_API_URL } = getEnvVariables


const calendarApi = axios.create({
    baseURL: 'http://localhost:4000/api',
})


// Todo: configurar interceptores


export default calendarApi
