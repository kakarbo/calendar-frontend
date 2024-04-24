import { ca } from "date-fns/locale"
import { calendarApi } from "../../src/api"

describe('Pruebas en el CalendarApi', () => {
    test('debe de tener la configuración por defecto', () => {
        
        console.log(process.env)
        expect( calendarApi.defaults.baseURL ).toBe( )
    })
})