import React, {useState,useEffect} from 'react'
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
import {backgroundIcons, contactIcons, kategoriIcons, locationIcons} from '../icon'
import InlineSVG from 'svg-inline-react';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom'

SwiperCore.use([FreeMode,Navigation,Thumbs]);

const YerlerDetay =()=>{
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    let { id } = useParams();

    if (!id) {
        return <NotFound />;
    }
    
        return(
            <div className='yerler-detay-ortaalan'>
                <div className='yerler-detay-cover'>
                    <div className="cover-baslik">
                        <div className="kategori">
                            <div className="kategori-icon"><InlineSVG src={kategoriIcons.nature}></InlineSVG></div>
                            <div className="kategori-adi">Doğa</div>
                        </div>
                        <div className="baslik">Güzeldere Şelalesi</div>
                    </div>
                    <div className="konum">
                        <div className="konum-ust-icon"><InlineSVG src={contactIcons.address}></InlineSVG></div>
                        <div>Konum</div>
                        <div className="konum-alt-icon"><InlineSVG src={locationIcons.location}></InlineSVG></div>
                    </div>
                </div>
                
                <div className="yerler-spot">
                    <div className="yerler-spot-yazi">
                    {id}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni pariatur, impedit cumque placeat corrupti omnis est commodi dolorem veniam quod voluptatibus laudantium sunt aliquam sed aliquid tenetur dolorum earum.
                    </div>
                </div>

                <div className="yerler-mini-slider">
                    <MiniSlider></MiniSlider>
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

                <div className="detay-yazi">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, excepturi, at ullam et magni, rem pariatur quisquam ducimus commodi eius veniam temporibus assumenda. Sint eum molestias vero accusantium eaque necessitatibus.
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, excepturi, at ullam et magni, rem pariatur quisquam ducimus commodi eius veniam temporibus assumenda. Sint eum molestias vero accusantium eaque necessitatibus.</span>
                </div>

                
                <IkiSiraSwiper></IkiSiraSwiper>
            </div>
        )
    
}

export default YerlerDetay;