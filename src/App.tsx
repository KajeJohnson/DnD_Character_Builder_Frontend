import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TestRaceList from "./components/test";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<div className="App">
			<TestRaceList />
			<SignupPage />
			<LoginPage />
		</div>
	);
}

export default App;
