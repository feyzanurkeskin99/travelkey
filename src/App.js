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

class App extends React.Component{
    
    //arrow fonk. şeklinde yazmazsak fonksiyonu bind ile bağlamamız gerekiyor,

    //state'i local storage'a göre güncelleyemiyom :'(  ve if öncesinde setItemde sıkıntı var ilk
    //çalıştığında hep true dönüyor 

    render(){
        
        if(localStorage.getItem("durum") === true || localStorage.getItem("durum") === null){
                localStorage.setItem("durum",true)
                return(
                    <div className="app">
                        <GirisEkrani/>
                    </div>
                )
        }
        else{
                return(
                <div className="app">
                <UstBar image={threeline} icon={iconLogo} />
                    <Routes>
                        <Route path='/anasayfa' element={<AnaSayfa />} />
                        <Route path='/travelkey' element={<AnaSayfa />} />
                        <Route path='/kategoriler' element={<Kategoriler />} />
                        <Route path='/kesfet' element={<Kesfet />} />
                    </Routes>
                <AltBar /></div>
                )
            }
    }
}
export default App;