import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';

const Etkinlikler =()=>{
    
    var {city, setCity} = useContext(AppContext);
    const options = {};
    const date="";
    const {
        loading,
        error,
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/events?sehir.plate='+city.city+'&vitrin=true', options, []);
    
    return(

    
        <div className='etkinlikler'>
            <NavLink to='/etkinlikler-sirala'>
                    <TumElemanlar name='Tüm Etkinlikler'></TumElemanlar>
            </NavLink>

            {error && <h1>Error!</h1>}
            {loading && <h1>Loading...</h1>}
            {data.map((events) => (
                <NavLink to={"/events/"+events.id+"-"+slugify(events.name)}>
                    <div key={events.id} className='etkinlikler-satir'>
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

export default Etkinlikler;