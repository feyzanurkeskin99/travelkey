import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import App from './App'
import './ozel.css'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
)