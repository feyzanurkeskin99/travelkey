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
import Etkinlikler from './Components/Etkinlikler'
import Kaydedilenler from './Components/Kaydedilenler'
import YerlerDetay from './Detay/YerlerDetay'
import EtkinliklerSirala from './Sırala/EtkinliklerSirala'
import HaberlerSirala from './Sırala/HaberlerSirala'
import KategoriSirala from './Sırala/KategoriSirala'
import YerlerSirala from './Sırala/YerlerSirala'
import KoleksiyonSirala from './Sırala/KoleksiyonSirala'

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
                    <div className='ortaalan'>
                    <Routes>
                        <Route path='/' element={ <AnaSayfa />} />
                        <Route path='/travelkey' element={<AnaSayfa />} />
                        <Route path='/kategoriler' element={<Kategoriler />} />
                        <Route path='/kesfet' element={<Kesfet />} />
                        <Route path='/giris' element={ <GirisEkrani/>} />
                        <Route path='/kaydedilenler' element={<Kaydedilenler />} />
                        <Route path='/etkinlikler' element={ <Etkinlikler/>} />
                        <Route path='/yerler-detay' element={ <YerlerDetay/>} />
                        <Route path='/yerler-sirala' element={ <YerlerSirala/>} />
                        <Route path='/etkinlikler-sirala' element={ <EtkinliklerSirala/>} />
                        <Route path='/haberler-sirala' element={ <HaberlerSirala/>} />
                        <Route path='/kategoriler-sirala' element={ <KategoriSirala/>} />
                        <Route path='/koleksiyonlar-sirala' element={ <KoleksiyonSirala/>} />
                        <Route path='*' element={<NotFound/>} />
                    </Routes>
                    </div>
                <AltBar />
                </div>
            </AppContext.Provider>  
              )
        }
    }

export default App;