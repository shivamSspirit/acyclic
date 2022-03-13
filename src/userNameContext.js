import React, { useState } from "react";
export const Context = React.createContext("defaultContext");

const AppContext = (props) => {
	const [defaultName, setDefaultName] = useState("");

	const setUserData = (data) => {
		setDefaultName(data);
	};

	let contextValue = {
		defaultName,
		setUserData,
	};

	return (
		<>
			<Context.Provider value={contextValue}>
				{props.children}
			</Context.Provider>
		</>
	);
};

export default AppContext;
