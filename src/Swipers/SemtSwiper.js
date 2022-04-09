import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import {useParams} from 'react-router-dom'
import { getApiModels } from '../Models/ApiModels';


SwiperCore.use([FreeMode,Navigation,Thumbs]);

const SemtSwiper =()=>{
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    var {city, setCity} = useContext(AppContext);
    const [data, setData]=useState([]);

    const url="bundles?city.plate="+city.city+"&isDistrict=true"//semt olan koleksiyonlar
    const getSemtApi = async() => {
        try{
            const res = await getApiModels(url);
            if(res.status) {
                setData(res.data)
            }
        }catch(e){
            alert(e.message)
        }
    }

    useEffect(() => {
        getSemtApi()
    },[])


        return(
            <>
                <div className='semt-swiper'>
                <div className="block-baslik">Semtler</div>
                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiperSemt">
                    {data
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===2)
                        .map((placess) => (
                            <SwiperSlide key={placess.id}>
                                    <NavLink to={"/bundles/"+placess[0].id+"-"+slugify(placess[0].name)}>
                                        <div className="semt-adi-alt">{placess[0].name}</div>
                                    </NavLink>
                                    <NavLink to={"/bundles/"+placess[1].id+"-"+slugify(placess[1].name)}>
                                        <div className="semt-adi-alt">{placess[1].name}</div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                        {data
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===1)
                        .map((placess) => (
                            <SwiperSlide key={placess.id}>
                                    <NavLink to={"/bundles/"+placess[0].id+"/"}>
                                        <div className="semt-adi-alt">{placess[0].name}</div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                </Swiper>
                </div>
            </>
        )
    
}

export default SemtSwiper;