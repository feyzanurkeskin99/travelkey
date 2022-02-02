import { render } from '@testing-library/react';
import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {useNavigate} from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react';
import { AppContext } from './Context'
import threeline from '../images/three-line.png'
import name from '../images/name.png'


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
        sideBar.classList.toggle('hidden')
    }
        return(
            <div className="ustbar">
                <div className="ustbar-button three-line" onClick={hideButton}><img src={threeline}></img></div>
                <div className="ustbar-name"><div><img src={name}></img></div></div>
                <div basic color='black' onClick={sehirSec} content='Black' className='city-button'><Icon name='map marker alternate' />{city.cityName || "sehirsec"}</div>
            </div>
        )
    
}

export default UstBar;