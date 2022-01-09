import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import {Link , NavLink} from 'react-router-dom'
import {navIcons} from '../icon'
import InlineSVG from 'svg-inline-react';

const AltBar  =()=>{
        return(
            <div className="altbar">
                <div className="altbar-button">
                    <NavLink to="/" className="altbar-link">
                    <InlineSVG src={navIcons.home}/>
                    </NavLink>
                </div>
                <div className="altbar-button location-border">
                    <NavLink to="/kategoriler" className="altbar-link location">
                    <InlineSVG src={navIcons.discover}/>
                    </NavLink>
                </div>
                <div className="altbar-button">
                    <NavLink to="/kesfet" className="altbar-link">
                    <InlineSVG src={navIcons.categories}/>
                    </NavLink>
                </div>
                <div className="altbar-button">
                    <NavLink to="/kategoriler" className="altbar-link">
                    <InlineSVG src={navIcons.events}/>
                    </NavLink>
                </div>
                <div className="altbar-button">
                    <NavLink to="/kesfet" className="altbar-link">
                    <InlineSVG src={navIcons.saved}/>
                    </NavLink>
                </div>
            </div>
        )
    
}

export default AltBar;