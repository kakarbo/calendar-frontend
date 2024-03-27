import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api/"
import { getEnvVariables } from "../helpers"



export const useAuthStore = () => {


    const { status, user, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const startLogin = async( { email, password } ) => {

        console.log({ email, password})


        try {

            const resp = calendarApi.post('/auth', { email, password })
            console.log({ resp })

        } catch (error) {
            console.log( { error })
        }
    }

    return {
        //* Propiedades
        status,
        user,
        errorMessage,

        //* Metodos
        startLogin,

    }

}