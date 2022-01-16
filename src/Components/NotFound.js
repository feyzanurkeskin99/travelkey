import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'semantic-ui-react'
import KategorilerSwiper2 from '../Swipers/KategorilerSwiper2'
import notFound from '../images/404-page.png'

const NotFound =()=>{
        return(
            <div className='not-found'>
                <img src={notFound}></img>
            </div>
        )
}

export default NotFound;