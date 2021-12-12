import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon, Label } from "semantic-ui-react";
import {BrowserRouter , Routes, Route} from 'react-router-dom'

class GirisEkrani extends React.Component{
    render(){
        return(
            <div className="giris-ekrani">
                <div className="giris-button">
                    <Button as='div' labelPosition='left'>
                        <Label as='a' basic pointing='right'>
                            Haydi Şehir Seçelim..
                        </Label>
                    </Button>
                    <Routes>
                        <Route path='/giris' element={<GirisEkrani />}>
                            onClick={this.durumDegistir}
                        </Route>
                    </Routes>
                </div>
            </div>
        )
    }
}

export default GirisEkrani;