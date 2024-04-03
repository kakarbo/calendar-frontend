import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CalendarApp } from './CalendarApp.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <CalendarApp />
    </Provider>
  </React.StrictMode>,
)
