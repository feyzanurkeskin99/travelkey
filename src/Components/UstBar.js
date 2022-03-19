import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {useNavigate} from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react';
import { AppContext } from './Context'
import name from '../images/name.png'
import InlineSVG from 'svg-inline-react';
import { headerIcon } from '../icon';


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
        var sideBar=document.querySelector(".side-bar")
        var menu=document.querySelector(".three-line")
        var close=document.querySelector(".close")
        sideBar.classList.toggle('hidden')
        menu.classList.toggle('hidden')
        close.classList.toggle('hidden')
    }
        return(
            <div className="ustbar">
                <div className="ustbar-button three-line transition-all" onClick={hideButton}><InlineSVG src={headerIcon.menu}></InlineSVG></div>
                <div className="ustbar-button close hidden!important transition-all" onClick={hideButton}><InlineSVG src={headerIcon.close}></InlineSVG></div>
                <div className="ustbar-name"><div><img src={name}></img></div></div>
                <div basic color='black' onClick={sehirSec} content='Black' className='city-button'><Icon name='map marker alternate' />{city.cityName || "sehirsec"}</div>
            </div>
        )
    
}

export default UstBar;