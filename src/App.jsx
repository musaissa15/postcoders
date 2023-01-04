import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Input from "./Input";
import "./App.css";

function App() {
	const [areas, setAreas] = useState([]);
	const [postcode, setPostcode] = useState("");
	const load = async () => {
		try {
			const areaData = await getAreaData();

			areas.concat(areaData);

			setAreas(areaData);
		} catch (error) {
			window.alert("todo: fix app");
		}
	};

	useEffect(() => {
		load();
	}, []);

	return (
		<div className="App">
			<h1>Postcoders</h1>
			<Input postcode={postcode} setPostcode={setPostcode} />
			<h2>{`Areas for BB10: ${areas.length}`}</h2>
		</div>
	);
}

export default App;
