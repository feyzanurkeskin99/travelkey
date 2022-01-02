import { render } from '@testing-library/react';
import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'semantic-ui-react';
import { AppContext } from './Context'
import threeline from './images/three-line.png'
import name from './images/name.png'


function UstBar (){

	var {city, setCity} = useContext(AppContext);

    function sehirSec(){
        localStorage.removeItem("city")
        localStorage.removeItem("cityName")
        setCity("sehirsec")
    }
        return(
            <div className="ustbar">
                <div className="ustbar-button three-line"><img src={threeline}></img></div>
                <div className="ustbar-name"><div><img src={name}></img></div></div>
                <Button basic color='black' onClick={sehirSec} content='Black' className='city-button'>{localStorage.getItem("cityName") || "sehirsec"}</Button>
            </div>
        )
    
}

export default UstBar;