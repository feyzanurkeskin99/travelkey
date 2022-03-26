import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import iconLogo from '../images/logo.jpeg'
import {useLocation, NavLink,useNavigate} from 'react-router-dom'
// import '../ozel.css'
import '../Styles/output.css'
import { AppContext } from '../Components/Context'
import {useLocalStorageState} from '../Components/utils'
import {backgroundIcons } from '../../src/icon'
import InlineSVG from 'svg-inline-react';
import { Drawer, Button, Space} from 'antd';
import logo from '../images/name.png'
import { headerIcon } from '../icon';

function YanbBar (){
    const [city, setCity] = useLocalStorageState("city",  "sehirsec");     
    const location = useLocation()

    React.useEffect((location) => {
        console.log('Location changed'+location);
    }, [location]);
    const navigate = useNavigate();
    function sehirSec(){
        localStorage.removeItem("city")
        localStorage.removeItem("cityName")
		navigate("/giris");
        setCity({cityName:"sehirsec"})
    }

    function hideButton(){
        var sideBar=document.querySelector(".side-bar")
        var menu=document.querySelector(".three-line")
        var close=document.querySelector(".close")
        menu.classList.toggle('hidden')
        sideBar.classList.toggle('hidden')
        close.classList.add('hidden')
    }
    return(
        
        <>        
            <AppContext.Provider value={{city, setCity}}>

                    <div className="side-bar hidden">
                    
                    <div className="ustbar-button close hidden transition-all" onClick={hideButton}><InlineSVG src={headerIcon.close}></InlineSVG></div>
                    <NavLink to={"/koleksiyonlar-sirala"}>
                            <div className="logo" onClick={hideButton}>
                            <div className="sidebar-kategori logo">
                            <img src={logo}/>
                            </div>
                            </div>
                        </NavLink>
                        
                        <div className="sidebar-orta">
                        <NavLink to={"/iletisim"}>
                            <div className="side-bar-eleman">
                            <div className="sidebar-kategori" onClick={hideButton}>
                            <span>İletişim</span>
                            </div>
                            </div>
                        </NavLink>
                        <NavLink to={"/koleksiyonlar-sirala"}>
                            <div className="side-bar-eleman">
                            <div className="sidebar-kategori" onClick={hideButton}>
                            <span>Doğa'nın Sesi</span>
                            </div>
                            </div>
                        </NavLink>
                        <NavLink to={"/haberler-sirala"}>
                            <div className="side-bar-eleman">
                            <div className="sidebar-kategori" onClick={hideButton}>
                            <span>Yer Öner</span>
                            </div>
                            </div>
                        </NavLink>
                        <NavLink to={"/etkinlikler-sirala"}>
                            <div className="side-bar-eleman" onClick={hideButton}>
                            <div className="sidebar-kategori">
                            <span>Hakkında</span>
                            </div>
                            </div>
                        </NavLink>
                        <div className="side-bar-eleman" >
                            <div className="sidebar-kategori" onClick={sehirSec}>
                            <span>Şehir Seç</span>
                            </div>
                        </div>
                        </div>
                        <div className="side-bar-foot" >
                            <div className="" onClick={sehirSec}>
                            <span>Copyright &copy; {new Date().getFullYear()} Gez Git V.1.0</span>
                            <span>by <strong>Doğanın Sesi Türkiye</strong></span>
                            </div>
                        </div>
                    </div>
            </AppContext.Provider> 
        </>
    )
        }
    
export default YanbBar;