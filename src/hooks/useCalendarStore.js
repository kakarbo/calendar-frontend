import { useDispatch, useSelector } from "react-redux"
import { calendarSlice, onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store"
import { calendarApi } from "../api"
import { convertEventsToDateEvents } from "../helpers"

export const useCalendarStore = () => {

    const dispatch = useDispatch()

    const { events, activeEvent } = useSelector( state => state.calendar )
    const { user } = useSelector( state => state.auth )

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: Update event

        if ( calendarEvent._id ) {
            dispatch( onUpdateEvent({ ...calendarEvent }) )
        } else {

            const { data } = await calendarApi.post('/events', calendarEvent )
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) )
        }

    }

    const startDeletingEvent = () => {
        // Todo: llegar al backend
        
        dispatch(onDeleteEvent())
    }

    const startLoadingEvents = async() => {

        try {

            const { data } = await calendarApi.get('/events')
            console.log({data})
            const events = convertEventsToDateEvents( data.msg )
            console.log(events)

        } catch (error) {
            console.log('Error cargando eventos')
            console.log(error)
        }
    }

    return {
        //* Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //* Métodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents,
    }
}
