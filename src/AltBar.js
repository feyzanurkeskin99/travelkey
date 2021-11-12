import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'

class AltBar extends React.Component{
    render(){
        return(
            <div className="altbar">
                
                <div className="altbar-button"><a href="/anasayfa"><i class="home icon"></i></a></div>
                <div className="altbar-button location-border"><a href="/kategoriler"><i class="location arrow icon"></i></a></div>
                <div className="altbar-button"><a href="/kesfet">C</a></div>
                <div className="altbar-button"><a href="/kategoriler"><i class="calendar alternate icon"></i></a></div>
                <div className="altbar-button"><a href="/kesfet">E</a></div>
            </div>
        )
    }
}

export default AltBar;