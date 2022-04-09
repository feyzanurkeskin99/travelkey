import React, {useContext, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {NavLink, useNavigate} from "react-router-dom";
import { AppContext } from './Context'
import name from '../images/name.png'
import InlineSVG from 'svg-inline-react';
import { headerIcon, locationIcons } from '../icon';


function UstBar (){

    const navigate = useNavigate();
	var {city, setCity} = useContext(AppContext);

    function sehirSec(){
        localStorage.removeItem("city")
        localStorage.removeItem("cityName")
        navigate("/giris")
        setCity({cityName:"sehirsec"})
    }

    function hideButton(){
        var sideBar=document.querySelector(".sidebar")
        var sideBarSag=document.querySelector(".sidebar-sag")
        var sideBarOrta=document.querySelector(".sidebar-orta")
        var sideBarFoot=document.querySelector(".sidebar-foot")
        var menu=document.querySelector(".three-line")
        var close=document.querySelector(".close")
        sideBar.classList.remove('hidden-side')
        sideBarOrta.classList.remove('hidden')
        sideBarFoot.classList.remove('hidden')
        menu.classList.add('hidden') 
        close.classList.remove('hidden')
        sideBarSag.classList.remove('hidden')

    }

        return(
            <div className="ustbar">
                <div className="ustbar-button three-line transition-all" onClick={hideButton}><InlineSVG src={headerIcon.menu}></InlineSVG></div>
                <NavLink to="/" className="ustbar-name"><div><img src={name}></img></div></NavLink>
                <div basic color='black' onClick={sehirSec} content='Black' className='city-button'>
                {/* <Icon name='map marker alternate' /> */}
                <InlineSVG src={headerIcon.location}/>
                {city.cityName || "sehirsec"}</div>
            </div>
        )
    
}

export default UstBar;