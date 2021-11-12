import React from 'react'
import ReactDOM from 'react-dom'
import AltBar from './AltBar'
import OrtaAlan from './OrtaAlan'
import UstBar from './UstBar'
import threeline from './images/three-line.png'
import iconLogo from './images/logo.jpeg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AnaSayfa from './AnaSayfa'
import Kategoriler from './Kategoriler'
import Kesfet from './Kesfet'

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="app">
                    <UstBar image={threeline} icon={iconLogo}/>
                    <OrtaAlan>
                    </OrtaAlan>
                    <AltBar/>
                    <Routes>
                        <Route path='/anasayfa' component={AnaSayfa} />
                        <Route path='/kategoriler' component={Kategoriler} />
                        <Route path='/kesfet' component={Kesfet} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)