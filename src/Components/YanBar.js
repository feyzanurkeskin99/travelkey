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
        sideBar.classList.toggle('hidden')
    }
    return(
        <AppContext.Provider value={{city, setCity}}>
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
        </AppContext.Provider>  
    )
        }
    
export default YanbBar;