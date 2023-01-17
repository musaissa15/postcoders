import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Input from "./Input";
import "./App.css";

function App() {
	const [areas, setAreas] = useState([]);
	const [postcode, setPostcode] = useState("");
	const [clicked, setClicked] = useState(false);
	const load = async () => {
		try {
			const areaData = await getAreaData(postcode);

			// areas.concat(areaData);

			setAreas(areaData);
		} catch (error) {
			// window.alert("todo: fix app");
		}
	};
	console.log(Object.keys(areas));
	useEffect(() => {
		load();
	}, [postcode]);
	let styles = {
		color: "pink",
	};
	return (
		<div className="App">
			<h1>Postcoders</h1>
			<Input
				postcode={postcode}
				setPostcode={setPostcode}
				clicked={clicked}
				setClicked={setClicked}
			/>
			<h2>
				{areas && clicked
					? `Areas for ${postcode}: ${areas.length}`
					: !areas && !clicked
					? "search"
					: null}
			</h2>
			<div>
				<ul>
					{areas.map((area) => {
						return (
							<li>
								
								<h1 className="info">{area["place name"]}</h1>
								<p>{area.state}</p>
								<h6>{area['state abbreviation']}</h6>
								<p>{area.longitude}</p>
								<p>{area.latitude}</p>
							
							</li>
							
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
