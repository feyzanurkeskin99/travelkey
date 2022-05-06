import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import { headerIcon } from '../icon';
import InlineSVG from 'svg-inline-react';
import {collectionIcons} from '../icon'

import Fancybox from "../Components/fancybox";


SwiperCore.use([FreeMode,Navigation,Thumbs]);

const MiniSlider =()=>{
    
    const [objectUst, setObjectUst]=useState({})
    const [objectAlt, setObjectAlt]=useState({})
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hiddenThumbs=(e)=>{
        document.querySelector('.lightbox').classList.remove('hidden')
        document.querySelector('.mini-slider-button').classList.remove('hidden')
        // var filter=document.getElementsByClassName("mini-slider-element active")
        // Array.from(filter).map(element => (
        //     element.classList.remove('active')
        // ))
        // // e.nativeEvent.path[1].classList.add('active')//tıklanılan galeri elemanına active classı vermek için
        // setThumbsSwiper(null)
    }
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images=[ 
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
    'https://swiperjs.com/demos/images/nature-10.jpg'
    ]
    
        return(
            <>
            {/* Mini slider kısmı */}
                <div className='mini-slider'>
                <Fancybox>
                    <p>
                    <Swiper spaceBetween={10} slidesPerView={2} className="mySwiper" >
                    {images?.map((element, index)=>(
                        <SwiperSlide className='mini-slider-element'>
                            <a data-fancybox="gallery" href={element}>
                                <img alt="" src={element} />
                            </a>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    </p>
                </Fancybox>
                </div>
                
            </>
        )
    
}

export default MiniSlider;