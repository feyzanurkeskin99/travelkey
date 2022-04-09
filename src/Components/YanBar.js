import React, {useContext, useEffect} from 'react'
import ReactDOM from 'react-dom'
import iconLogo from '../images/logo.jpeg'
import {useLocation, NavLink,useNavigate} from 'react-router-dom'
// import '../ozel.css'
import '../Styles/output.css'
import { AppContext } from '../Components/Context'
import InlineSVG from 'svg-inline-react';
import { Drawer, Button, Space} from 'antd';
import logo from '../images/name.png'
import { headerIcon } from '../icon';

function YanbBar (){    
	var {city, setCity} = useContext(AppContext);   
    const location = useLocation()
    const navigate = useNavigate();

    React.useEffect((location) => {
        console.log('Location changed'+location);
    }, [location]);
    
    
    function sehirSec(){
        localStorage.removeItem("city")
        localStorage.removeItem("cityName")
		navigate("/giris");
        setCity({cityName:"sehirsec"})
    }

    function hideButton(){
        var sideBar=document.querySelector(".sidebar")
        var sideBarSag=document.querySelector(".sidebar-sag")
        var sideBarOrta=document.querySelector(".sidebar-orta")
        var sideBarFoot=document.querySelector(".sidebar-foot")
        var menu=document.querySelector(".three-line")
        var close=document.querySelector(".close")
        menu.classList.remove('hidden')
        sideBar.classList.add('hidden-side')
        sideBarOrta.classList.add('hidden')
        sideBarFoot.classList.add('hidden')
        close.classList.add('hidden')
        sideBarSag.classList.add('hidden')
    }
    
    return(
        
        <>        
            <AppContext.Provider value={{city, setCity}}>

                    <div className="sidebar hidden-side">
                        <div className="sidebar-sol">
                            <div className="ustbar-button close hidden transition-all" onClick={hideButton}><InlineSVG src={headerIcon.close}></InlineSVG></div>
                            <NavLink to={"/"}>
                                <div className="logo" onClick={hideButton}>
                                <div className="sidebar-kategori logo">
                                <img src={logo}/>
                                </div>
                                </div>
                            </NavLink>
                            
                            <div className="sidebar-orta hidden">
                            <NavLink to={"/iletisim"}>
                                <div className="sidebar-eleman">
                                <div className="sidebar-kategori" onClick={hideButton}>
                                <span>İletişim</span>
                                </div>
                                </div>
                            </NavLink>
                            <a href={"https://www.doganinsesiturkiye.com/"}>
                                <div className="sidebar-eleman">
                                <div className="sidebar-kategori" onClick={hideButton}>
                                <span>Doğa'nın Sesi</span>
                                </div>
                                </div>
                            </a>
                            <NavLink to={"/haberler-sirala"}>
                                <div className="sidebar-eleman">
                                <div className="sidebar-kategori" onClick={hideButton}>
                                <span>Yer Öner</span>
                                </div>
                                </div>
                            </NavLink>
                            <NavLink to={"/etkinlikler-sirala"}>
                                <div className="sidebar-eleman" onClick={hideButton}>
                                <div className="sidebar-kategori">
                                <span>Hakkında</span>
                                </div>
                                </div>
                            </NavLink>
                            <div className="sidebar-eleman" >
                                <div className="sidebar-kategori" onClick={sehirSec}>
                                <span>Şehir Seç</span>
                                </div>
                            </div>
                            </div>
                            <div className="sidebar-foot hidden" >
                                <div className="" >
                                <span>Copyright &copy; {new Date().getFullYear()} Gez Git V.1.0</span>
                                <span>by <strong>Doğanın Sesi Türkiye</strong></span>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-sag" onClick={hideButton}>

                        </div>
                    </div>
            </AppContext.Provider> 
        </>
    )
        }
    
export default YanbBar;