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


SwiperCore.use([FreeMode,Navigation,Thumbs]);

const SemtSwiper =()=>{
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
        return(
            <>
                <div className='semt-swiper'>
                <div className="semt-baslik">Semtler</div>
                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiperSemt">
                    <SwiperSlide>
                        <div className="semt-adi-ust">Akçakoca</div>
                        <div className="semt-adi-alt">Konuralp</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="semt-adi-ust">Akçakoca</div>
                        <div className="semt-adi-alt">Konuralp</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="semt-adi-ust">Akçakoca</div>
                        <div className="semt-adi-alt">Konuralp</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="semt-adi-ust">Akçakoca</div>
                        <div className="semt-adi-alt">Konuralp</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="semt-adi-ust">Akçakoca</div>
                        <div className="semt-adi-alt">Konuralp</div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </>
        )
    
}

export default SemtSwiper;