import React, { useContext } from "react";
import { Context } from "../../userNameContext";

function ProfileName() {
	const context = useContext(Context);
	const { defaultName } = context;
	return (
		<div className="profile-name w-full flex h-screen">
			<div className="flex flex-col w-1/2 justify-center justify-items-center align-middle m-0 m-auto">
				<h1 className="text-center text-stone-600 text-xl ">
					profile name
				</h1>
				<h1 className="text-center text-stone-600 text-xl">
					this is from landing{" "}
					<span className="text-white">{defaultName}</span>
				</h1>
			</div>
		</div>
	);
}

export default ProfileName;
