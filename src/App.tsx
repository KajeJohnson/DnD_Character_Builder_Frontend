import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import TestRaceList from "./components/test";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div className="App">
			<div className="bg-[url('/img/gobbyboiii.png')]"></div>
			<Routes>
				<Route path="/" element={<LoginPage />} />
			</Routes>
		</div>
	);
}

export default App;
