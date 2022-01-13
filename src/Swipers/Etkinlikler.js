import React from 'react'
import ReactDOM from 'react-dom'
import TumElemanlar from '../TumElemanlar';


const Etkinlikler =()=>{
    
    return(
        <div className='etkinlikler'>
        <TumElemanlar name='Tüm Etkinlikler'></TumElemanlar>
        <div className='etkinlikler-satir'>
            <div className="tarih">
                <h2>24</h2>
                <div className="tarih-ay-yil">
                    <h4>Ekim</h4>
                    <h3>2022</h3>
                </div>
            </div>
            <h2 className="etkinlik-adi">Bi'rafting Kampı</h2>
        </div>
        <div className='etkinlikler-satir'>
            <div className="tarih">
                <h2>05</h2>
                <div className="tarih-ay-yil">
                    <h4>Kasım</h4>
                    <h3>2022</h3>
                </div>
            </div>
            <h2 className="etkinlik-adi">Haluk Levent Konseri</h2>
        </div>
        </div>
    )
}

export default Etkinlikler;