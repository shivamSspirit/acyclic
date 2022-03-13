import React from "react";
import { Route, Routes } from "react-router-dom";
import Land from "./components/landingPage/land";
import ProfileName from "./components/profilePage/profileName";
import Error from "./components/errorPage/error";
import AppContext from "./userNameContext";

function App() {
	return (
		<AppContext>
			<div className="App bg-black font-bold">
				<>
					<Routes>
						<Route path="/" element={<Land />} />
						<Route path="/profileName" element={<ProfileName />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</>
			</div>
		</AppContext>
	);
}

export default App;
