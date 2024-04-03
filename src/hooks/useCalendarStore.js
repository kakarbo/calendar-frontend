import { useDispatch, useSelector } from "react-redux"
import { calendarSlice, onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store"

export const useCalendarStore = () => {

    const dispatch = useDispatch()

    const { events, activeEvent } = useSelector( state => state.calendar )

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend

        // Todo bien

        if ( calendarEvent._id ) {
            dispatch( onUpdateEvent({ ...calendarEvent }) )
        } else {
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
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
