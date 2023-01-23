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

			setAreas(areaData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		load();
	}, [postcode]);
	
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
				{areas && clicked ? `Areas for ${postcode}: ${areas.length}` : null}
			</h2>
			<div>
				<ul>
					{areas.map((area) => {
						return (
							<li>
								<h1 className="info">
									{!area["place name"]
										? "Place name unknown"
										: area["place name"]}
								</h1>
								<p>{!area.state ? "State unknown" : area.state}</p>
								<h6>
									{!area["state abbreviation"]
										? "Arbbreviation unknown"
										: area["state abbreviation"]}
								</h6>
								<p>{!area.longitude ? "Longitude unknown" : area.longitude}</p>
								<p>{!area.latitude ? "Latitude unknown" : area.latitude}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
