import React from "react";
import ReactDOM from "react-dom";
import { Button, Icon, Label } from "semantic-ui-react";
import {Link,NavLink,useNavigate,BrowserRouter,	Routes,	Route} from "react-router-dom";

function GirisEkrani() {
	let navigate = useNavigate();
	function updateState() {
		localStorage.setItem("city", "81");
		navigate("/", { replace: true });
	}

	return (
		<div className="giris-ekrani">
			<div className="giris-button">
				<Button as="div" labelPosition="left" onClick={updateState}>
					<Label as="a" basic pointing="right">
						Haydi Şehir Seçelim..
					</Label>
				</Button>
			</div>
		</div>
	);
}

export default GirisEkrani;