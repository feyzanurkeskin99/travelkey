import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import AltBar from './Components/AltBar'
import OrtaAlan from './Components/OrtaAlan'
import UstBar from './Components/UstBar'
import threeline from './images/three-line.png'
import iconLogo from './images/logo.jpeg'
import {BrowserRouter , Routes, Route, useLocation, NavLink} from 'react-router-dom'
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
import BundlesYerlerSirala from './Sırala/BundlesYerlerSirala'
import KoleksiyonSirala from './Sırala/KoleksiyonSirala'
import useFetch from 'use-http';
import HaberlerDetay from './Detay/HaberlerDetay'
import EtkinliklerDetay from './Detay/EtkinliklerDetay'
import {backgroundIcons, contactIcons, kategoriIcons, locationIcons} from '../src/icon'
import InlineSVG from 'svg-inline-react';
import Ara from './Components/Ara'

function App (){
    const [city, setCity] = useLocalStorageState("city",  "sehirsec");     
    const location = useLocation()
    React.useEffect((location) => {
        console.log('Location changed'+location);
    }, [location]);
    function sehirSec(){
        localStorage.removeItem("city")
        localStorage.removeItem("cityName")
        setCity({cityName:"sehirsec"})
    }
    function hideButton(){
        var sideBar=document.querySelector(".side-bar")
        sideBar.classList.toggle('hidden')
    }

        if (city === "sehirsec" || city.cityName === "sehirsec") {
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

                    <div className="side-bar hidden">
                        <NavLink to={"/koleksiyonlar-sirala"}>
                            <div className="side-bar-eleman" onClick={hideButton}>
                            <div className="sidebar-kategori">
                            <InlineSVG src={backgroundIcons.bundles}></InlineSVG>
                            <span>Vitrindekiler</span>
                            </div>
                            </div>
                        </NavLink>
                        <NavLink to={"/yerler-sirala"}>
                            <div className="side-bar-eleman">
                            <div className="sidebar-kategori" onClick={hideButton}>
                            <InlineSVG src={backgroundIcons.routes}></InlineSVG>
                            <span>Yerler</span>
                            </div>
                            </div>
                        </NavLink>
                        <NavLink to={"/koleksiyonlar-sirala"}>
                            <div className="side-bar-eleman">
                            <div className="sidebar-kategori" onClick={hideButton}>
                            <InlineSVG src={backgroundIcons.collections}></InlineSVG>
                            <span>Koleksiyonlar</span>
                            </div>
                            </div>
                        </NavLink>
                        <NavLink to={"/haberler-sirala"}>
                            <div className="side-bar-eleman">
                            <div className="sidebar-kategori" onClick={hideButton}>
                            <InlineSVG src={backgroundIcons.blogs}></InlineSVG>
                            <span>Haberler</span>
                            </div>
                            </div>
                        </NavLink>
                        <NavLink to={"/etkinlikler-sirala"}>
                            <div className="side-bar-eleman" onClick={hideButton}>
                            <div className="sidebar-kategori">
                            <InlineSVG src={backgroundIcons.events}></InlineSVG>
                            <span>Etkinlikler</span>
                            </div>
                            </div>
                        </NavLink>
                        <div className="side-bar-eleman" >
                            <div className="sidebar-kategori" onClick={sehirSec}>
                            <InlineSVG src={backgroundIcons.city}></InlineSVG>
                            <span>Şehir Seç</span>
                            </div>
                        </div>
                </div>
                    <div className='ortaalan'>
                    
                    <Routes>
                        <Route path='/' element={ <AnaSayfa />} />
                        <Route path='/travelkey' element={<AnaSayfa />} />
                        <Route path='/kategoriler' element={<Kategoriler />} />
                        <Route path='/kesfet' element={<Kesfet />} />
                        <Route path='/giris' element={ <GirisEkrani/>} />
                        <Route path='/kaydedilenler' element={<Kaydedilenler />} />
                        <Route path='/etkinlikler' element={ <Etkinlikler/>} />
                        <Route path='/ara' element={ <Ara/>} />
                        <Route path='/yerler-detay' element={ <YerlerDetay/>} />
                        <Route path='/places/:id' element={ <YerlerDetay/>} />
                        <Route path='/yerler-sirala' element={ <YerlerSirala/>} />
                        <Route path='/bundles/:id' element={ <BundlesYerlerSirala/>} />
                        <Route path='/etkinlikler-sirala' element={ <EtkinliklerSirala/>} />
                        <Route path='/events/:id' element={ <EtkinliklerDetay/>} />
                        <Route path='/haberler-sirala' element={ <HaberlerSirala/>} />
                        <Route path='/blogs/:id' element={ <HaberlerDetay/>} />
                        <Route path='/kategoriler-sirala' element={ <KategoriSirala/>} />
                        <Route path='/koleksiyonlar-sirala' element={ <KoleksiyonSirala/>} />
                        <Route path='/ara/:id' element={ <Ara/>} />
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