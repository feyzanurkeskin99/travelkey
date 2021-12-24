import React from 'react'
import ReactDOM from 'react-dom'
import AltBar from './AltBar'
import OrtaAlan from './OrtaAlan'
import UstBar from './UstBar'
import threeline from './images/three-line.png'
import iconLogo from './images/logo.jpeg'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './ozel.css'
import AnaSayfa from './AnaSayfa'
import Kategoriler from './Kategoriler'
import Kesfet from './Kesfet'
import GirisEkrani from './GirisEkrani'

class Deneme extends React.Component{
    render(){
        return(
                <div className="app">
                <UstBar image={threeline} icon={iconLogo} />
                    <Routes>
                        <Route path='/anasayfa' element={<AnaSayfa />} />
                        <Route path='/travelkey' element={<AnaSayfa />} />
                        <Route path='/kategoriler' element={<Kategoriler />} />
                        <Route path='/kesfet' element={<Kesfet />} />
                    </Routes>
                <AltBar />
                </div>
        )
    }
}
export default Deneme;