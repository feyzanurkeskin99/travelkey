import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import AltBar from './Components/AltBar'
import OrtaAlan from './Components/OrtaAlan'
import UstBar from './Components/UstBar'
import threeline from './images/three-line.png'
import iconLogo from './images/logo.jpeg'
import {BrowserRouter , Routes, Route,useNavigate} from 'react-router-dom'
import './ozel.css'
import AnaSayfa from './Components/AnaSayfa'
import Kategoriler from './Components/Kategoriler'
import Kesfet from './Components/Kesfet'
import GirisEkrani from './Components/GirisEkrani'
import NotFound from './Components/NotFound'
import { AppContext } from './Components/Context'
import {useLocalStorageState} from './Components/utils'

function App (){
    const [city, setCity] = useLocalStorageState("city",  "sehirsec");
        if (city.cityName == "sehirsec") {
            return(
                <AppContext.Provider value={{city, setCity}}>
                <div className="app">
                    <Routes>
                        <Route path='*' element={ <GirisEkrani /> } />
                    </Routes>
               </div>
               </AppContext.Provider>  
                )
        } else {
            return(
                <AppContext.Provider value={{city, setCity}}>
                <div className="app">
                <UstBar/>
                    <Routes>
                        <Route path='/' element={ <AnaSayfa />} />
                        <Route path='/travelkey' element={<AnaSayfa />} />
                        <Route path='/kategoriler' element={<Kategoriler />} />
                        <Route path='/kesfet' element={<Kesfet />} />
                        <Route path='/giris' element={ <GirisEkrani/>} />
                        <Route path='*' element={<NotFound/>} />
                    </Routes>
                <AltBar />
                </div>
            </AppContext.Provider>  
              )
        }
    }

export default App;