import React from 'react'
import ReactDOM from 'react-dom'
import InlineSVG from 'svg-inline-react';
import { collectionIcons } from './icon';

const TumElemanlar =(props)=>{
    
    return(
        <>
        <div className='all-collections-container'>
                <div className='all-collections'>
                    <span>{props.name}</span>
                    <InlineSVG src={collectionIcons.more}></InlineSVG>
                </div>
        </div>
        
        </>
    )
}

export default TumElemanlar;