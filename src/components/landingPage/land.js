import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../userNameContext";

function Land() {
	const [userName, setUserName] = useState("");
	const context = useContext(Context);
	const { setUserData } = context;
	const navigate = useNavigate();

	const handleUserChange = (e) => {
		setUserName(e.target.value);
	};

	const handleForm = async (e) => {
		e.preventDefault();
		setUserData(userName);
		setUserName("");
		await navigate("/profileName");
	};

	return (
		<div>
			<div className="form w-full h-screen flex align-middle justify-center justify-items-center m-auto">
				<form
					className="p-3 user-form flex flex-col gap-5 w-96 h-40 m-0 m-auto rounded-md border-2 border-stone-500 "
					onSubmit={handleForm}
				>
					<label
						className="label text-slate-400 text-xl"
						htmlFor="user"
					>
						userName
					</label>
					<input
						required
						value={userName}
						onChange={handleUserChange}
						className="user-input text-stone-600 text-xl h-12 bg-slate-400 border-red-400 rounded-md"
					/>
					<button
						className="text-center text-slate-400 text-xl border-2 border-slate-400 backdrop-blur-sm bg-transparent rounded-lg w-24 h-11"
						type="submit"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}

export default Land;
