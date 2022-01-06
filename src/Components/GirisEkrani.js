import React, {useState, useContext} from 'react'
import ReactDOM from "react-dom";
import { Button, Icon, Label } from "semantic-ui-react";
import {Link,NavLink,useNavigate,BrowserRouter,	Routes,	Route} from "react-router-dom";
import SehirSec from "./SehirSec";
import { Dropdown, Grid, Segment } from 'semantic-ui-react'
import Select from 'react-select'
import { AppContext } from './Context'


function GirisEkrani() {

	var {city, setCity} = useContext(AppContext);
	function handleChange (e) {
		setCity({"city":e.value, "cityName":e.label })
	}

	
const cityOptions = [
	{ value: '81', label: 'Düzce' },
	{ value: '14', label: 'Bolu' },
	{ value: '54', label: 'Sakarya' },
	{ value: '67', label: 'Zonguldak' },
]

	return (
		<div className="giris-ekrani">
			<div className="giris-button">
				<Button as="div" labelPosition="left">
					<Label as="a" basic pointing="right">
						Haydi Şehir Seçelim..
					</Label>
				</Button>
			</div>
			<Select inputProps={{readOnly:true}} options={cityOptions} onChange={handleChange}/>
		</div>
	);
}

export default GirisEkrani;