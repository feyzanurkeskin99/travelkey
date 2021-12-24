import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon, Label } from "semantic-ui-react";
import {Link , NavLink} from 'react-router-dom'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import AnaSayfa from './AnaSayfa'

import App from './App'

class GirisEkrani extends React.Component{

    updateState (){
        localStorage.setItem("durum", false)
        return(
            <div className="app">
                <App />
            </div>
        )
    }
    
    render(){
        return(
            <div className="giris-ekrani">
                <div className="giris-button">
                    <Button as='div' labelPosition='left' onClick={this.updateState}>
                        <Label as='a' basic pointing='right'>
                            Haydi Şehir Seçelim..
                        </Label>
                    </Button>
                </div>
            </div>
        )
    }
}

export default GirisEkrani;