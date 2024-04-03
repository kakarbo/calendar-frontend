import { useDispatch, useSelector } from "react-redux"
import { calendarSlice, onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store"
import { calendarApi } from "../api"

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

    return {
        //* Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //* Métodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
