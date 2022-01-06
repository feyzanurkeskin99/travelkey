import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'semantic-ui-react'
import KategorilerSwiper2 from '../Swipers/KategorilerSwiper2'

import { AppContext } from './Context'

const HavaDurumu =()=>{
    
	var {city, setCity} = useContext(AppContext);
        return(
            <div className='hava-durumu'>
                <div>
                    <h2 className='hava-durumu-derece'>16°</h2>
                    <h4 className='hava-durumu-sehir'>{city.cityName}</h4>
                    <h2 className='hava-durumu-durum'>Parçalı Bulutlu</h2>
                </div>
                <div>
                    <img src='./images/light-snow.png'></img>
                </div>
            </div>
        )
}

export default HavaDurumu;