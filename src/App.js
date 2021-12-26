import React from 'react'
import ReactDOM from 'react-dom'
import AltBar from './AltBar'
import OrtaAlan from './OrtaAlan'
import UstBar from './UstBar'
import threeline from './images/three-line.png'
import iconLogo from './images/logo.jpeg'
import {BrowserRouter , Routes, Route,useNavigate} from 'react-router-dom'
import './ozel.css'
import AnaSayfa from './AnaSayfa'
import Kategoriler from './Kategoriler'
import Kesfet from './Kesfet'
import GirisEkrani from './GirisEkrani'

function App (){

     let navigate = useNavigate();
        if (!localStorage.getItem("city")) {
            return(
                <div className="app">
                    <Routes>
                        <Route path='*' element={ <GirisEkrani /> } />

                    </Routes>
               </div>
                )
        } else {
            return(
                <div className="app">
                <UstBar image={threeline} icon={iconLogo} />
                    <Routes>
                        <Route path='/' element={ <AnaSayfa />} />
                        <Route path='/travelkey' element={<AnaSayfa />} />
                        <Route path='/kategoriler' element={<Kategoriler />} />
                        <Route path='/kesfet' element={<Kesfet />} />
                        <Route path='/giris' element={ <GirisEkrani/>} />
                    </Routes>
                <AltBar /></div>
                )
        }
    }

export default App;