import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Text } from "./UI";
import * as UI from "./UI";

function App() {
	return (
		<div className="App">
			<UI.Button>
				<UI.Text>UI.TEXT</UI.Text>
			</UI.Button>
			<Button>
				<Text>Testando</Text>
			</Button>
		</div>
	);
}

export default App;
