import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import {Link , NavLink} from 'react-router-dom'
import {navIcons} from '../icon'
import InlineSVG from 'svg-inline-react';

const AltBar  =()=>{
        return(
            <div className="altbar">
                <NavLink to="/" className="altbar-link">
                    <div className="altbar-button">
                        <InlineSVG src={navIcons.home}/>
                    </div>
                </NavLink>
                <NavLink to="/kesfet" className="altbar-link location">
                    <div className="altbar-button location-border">
                        <InlineSVG src={navIcons.discover}/>
                    </div>
                </NavLink>
                <NavLink to="/kategoriler-sirala" className="altbar-link location">
                    <div className="altbar-button location-border">
                        <InlineSVG src={navIcons.categories}/>
                    </div>
                </NavLink>
                <NavLink to="/etkinlikler-sirala" className="altbar-link location">
                    <div className="altbar-button location-border">
                        <InlineSVG src={navIcons.events}/>
                    </div>
                </NavLink>
                <NavLink to="/kaydedilenler" className="altbar-link location">
                    <div className="altbar-button location-border">
                        <InlineSVG src={navIcons.saved}/>
                    </div>
                </NavLink>
            </div>
        )
    
}

export default AltBar;