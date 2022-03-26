import React, {useState, useContext} from 'react'
import ReactDOM from "react-dom";
import {Link,NavLink,useNavigate,BrowserRouter,	Routes,	Route} from "react-router-dom";
import SehirSec from "./SehirSec";
import Select from 'react-select'
import { AppContext } from './Context'


function GirisEkrani() {

    const navigate = useNavigate();
	var {city, setCity} = useContext(AppContext);
	function handleChange (e) {
		setCity({"city":e.value, "cityName":e.label })
		navigate("/travelkey");
	}

	
const cityOptions = [
	{ value: '81', label: 'Düzce' },
	// { value: '14', label: 'Bolu' },
	// { value: '54', label: 'Sakarya' },
	// { value: '67', label: 'Zonguldak' },
]

	return (
		<div className="giris-ekrani">
			<div className="giris-button">
				<buton as="div" labelPosition="left">
					<label as="a" basic pointing="right">
						Haydi Şehir Seçelim..
					</label>
				</buton> 
			</div>
			<Select options={cityOptions} onChange={handleChange} blurInputOnSelect={false} isSearchable={ false }/>
		</div>
	);
}

export default GirisEkrani;