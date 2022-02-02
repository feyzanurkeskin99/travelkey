import React, {useState,useEffect, useContext, useRef} from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon } from 'semantic-ui-react'
import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import MiniSlider from '../Swipers/MiniSlider';
import IkiSiraSwiper from '../Swipers/IkiSiraSwiper';
import {contactIcons, dateIcon} from '../icon';
import InlineSVG from 'svg-inline-react';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../Components/Context';
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';

SwiperCore.use([FreeMode,Navigation,Thumbs]);

const HaberlerDetay =()=>{

    const mapRef= useRef();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    var {city, setCity} = useContext(AppContext);
    const [data, setData]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get('https://seyyahpanel.kod8.app/blogs?sehir.plate='+city.city)
            .then(response => {
                setData(response.data);
            })
        }
        fetchData();
    },[]);


    let { id } = useParams();
    if (!id) {
        return <NotFound />;
    }
    //url den id'yi çekmek için

        return(
            <div className='haberler-detay-ortaalan'>
                {
                data
                .filter(dataFilter => ""+dataFilter.id === id.split("-")[0])
                .map((dataBlogs)=>(
                    <>
                    <div className='haberler-detay-cover'>
                    </div>
                    <div className="haber-detay">
                        <div className="haber-detay-baslik">{dataBlogs.title}</div>
                        <div className='haberler-detay-tarih'><InlineSVG src={dateIcon.datetime}></InlineSVG> {new Date(dataBlogs.datetime).toLocaleString('tr', {day:"numeric", month:"short", year:"numeric"})}</div>

                        <div className="haberler-spot">
                            <div className="haberler-spot-yazi">
                                {dataBlogs.spot}
                            </div>
                        </div>

                        <div className="haberler-mini-slider">
                            <MiniSlider></MiniSlider>
                        </div>
                        <div className="detay-yazi">
                            {parse(dataBlogs.body)}
                        </div>
                    
                        <div className="iletisim">
                            <h2 className='iletisim-baslik'>İletişim Bilgileri</h2>
                            <div className="iletisim-bilgi">
                                <span className='iletisim-eposta'><InlineSVG src={contactIcons.email}></InlineSVG><span className="koyu">Mail:</span><span className="iletisim-detay">feyzanurkeskin1999@gmail.com</span></span>
                                <span className='iletisim-web'><InlineSVG src={contactIcons.web}></InlineSVG><span className="koyu">Web:</span><span className="iletisim-detay">www.seyyah.tk</span></span>
                                <span className='iletisim-telefon'><InlineSVG src={contactIcons.phone}></InlineSVG><span className="koyu">Telefon:</span><span className="iletisim-detay">0542 776 20 22</span></span>
                                <span className='iletisim-adres'><InlineSVG src={contactIcons.address}></InlineSVG><span className="koyu">Adres:</span> <span className="iletisim-detay">Bitirme cad. Projesi mah. No:100</span></span>
                            </div>
                        </div>

                    </div>
                    </>
                ))}
            </div>
        )
    
}

export default HaberlerDetay;