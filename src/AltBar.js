import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.min.css'

import {Link , NavLink} from 'react-router-dom'

const AltBar  =()=>{
        return(
            <div className="altbar">
                <div className="altbar-button">
                    <NavLink to="/" className="altbar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333	c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z" opacity=".35"></path><path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z"></path><path d="M20.499,9.23c-0.247,0-0.496-0.061-0.727-0.189l-6.839-3.8c-0.584-0.324-1.28-0.324-1.864,0l-6.839,3.8	c-0.725,0.402-1.637,0.142-2.04-0.583c-0.402-0.724-0.142-1.637,0.583-2.04l6.839-3.8c1.496-0.832,3.282-0.831,4.778,0l6.839,3.8	c0.724,0.402,0.985,1.315,0.583,2.04C21.537,8.952,21.026,9.23,20.499,9.23z"></path></svg>
                    </NavLink>
                </div>
                <div className="altbar-button location-border">
                    <NavLink to="/kategoriler" className="altbar-link location">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.078,4.07L2.323,17.464c-1.005,1.737,0.484,3.854,2.458,3.495L12,19.647V2.961	C11.253,2.961,10.505,3.331,10.078,4.07z" opacity=".35"></path><path d="M21.677,17.464L13.922,4.07C13.495,3.331,12.747,2.961,12,2.961v16.686l7.219,1.312	C21.193,21.319,22.683,19.201,21.677,17.464z"></path></svg>
                    </NavLink>
                </div>
                <div className="altbar-button">
                    <NavLink to="/kesfet" className="altbar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="7" r="4" opacity=".35"></circle><path d="M15,3c-1.105,0-2,0.895-2,2v4c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H15z"></path><path d="M10,21H4c-0.347,0-0.668-0.18-0.851-0.475s-0.199-0.663-0.044-0.973l3-6c0.339-0.678,1.45-0.678,1.789,0l3,6	c0.155,0.31,0.138,0.678-0.044,0.973S10.347,21,10,21z"></path><path d="M18.536,21h-4.072c-0.433,0-0.817-0.279-0.951-0.69l-1.259-3.873	c-0.134-0.412,0.013-0.864,0.363-1.118l3.295-2.394c0.351-0.256,0.825-0.256,1.176,0l3.295,2.394	c0.351,0.254,0.497,0.706,0.363,1.118l-1.259,3.873C19.353,20.721,18.969,21,18.536,21z" opacity=".35"></path></svg>
                    </NavLink>
                </div>
                <div className="altbar-button">
                    <NavLink to="/kategoriler" className="altbar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,21H6c-1.657,0-3-1.343-3-3V7h18v11C21,19.657,19.657,21,18,21z" opacity=".35"></path><path d="M18,3H6C4.343,3,3,4.343,3,6v1h18V6C21,4.343,19.657,3,18,3z"></path><circle cx="14" cy="18" r="1"></circle><circle cx="10" cy="18" r="1"></circle><circle cx="6" cy="18" r="1"></circle><circle cx="6" cy="14" r="1"></circle><circle cx="10" cy="14" r="1"></circle><circle cx="14" cy="14" r="1"></circle><circle cx="18" cy="14" r="1"></circle><circle cx="18" cy="10" r="1"></circle><circle cx="14" cy="10" r="1"></circle><circle cx="10" cy="10" r="1"></circle></svg>
                    </NavLink>
                </div>
                <div className="altbar-button">
                    <NavLink to="/kesfet" className="altbar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,4H4v16.27c0,1.285,1.352,2.12,2.501,1.546L12,19.066l5.499,2.75C18.648,22.39,20,21.554,20,20.27	V4z" opacity=".35"></path><path d="M19.5,3c-0.386,0-14.614,0-15,0C3.672,3,3,3.672,3,4.5S3.672,6,4.5,6c0.386,0,14.614,0,15,0C20.328,6,21,5.328,21,4.5	S20.328,3,19.5,3z"></path></svg>
                    </NavLink>
                </div>
            </div>
        )
    
}

export default AltBar;