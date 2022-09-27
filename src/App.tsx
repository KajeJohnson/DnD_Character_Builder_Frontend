import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import TestRaceList from "./components/test";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import CharBuilder from "./pages/CharBuilderPage";
import StatPage from "./pages/StatPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/homepage"
					element={
						<PrivateRoute>
							<HomePage />
						</PrivateRoute>
					}
				/>
				<Route path="/" element={<LoginPage />} />
				<Route
					path="/createCharacter"
					element={
						<PrivateRoute>
							<CharBuilder />
						</PrivateRoute>
					}
				/>
				<Route
					path="/character/:characterId"
					element={
						<PrivateRoute>
							<StatPage />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
