import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'

const EtkinliklerSirala =()=>{
    
    var {city, setCity} = useContext(AppContext);
    const options = {};
const date="";
const {
    loading,
    error,
    data = [],
} = useFetch('https://seyyahpanel.kod8.app/events?sehir.plate='+city.city, options, []);

return(


    <div className='etkinlikler-sirala'>

        {error && <h1>Error!</h1>}
        {loading && <h1>Loading...</h1>}
        {data.map((events) => (
            <NavLink to={"/events?id="+events.id+"/"}>
                <div className='etkinlikler-satir'>
                    <div className="tarih">
                        <h2>{new Date(events.datetime).getDate()}</h2>
                        <div className="tarih-ay-yil">
                            <h4>{new Date(events.datetime).toLocaleString('tr', {month:"short"})}</h4>
                            <h3>{new Date(events.datetime).getFullYear()}</h3>
                        </div>
                    </div>
                    <h2 className="etkinlik-adi">{events.name}</h2>
                </div>
            </NavLink>
        ))}
    </div>
)
}

export default EtkinliklerSirala;