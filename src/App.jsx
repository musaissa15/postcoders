import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Input from "./Input";
import "./App.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

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
console.log(typeof(areas));
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
								{/* <h1 className="info"> */}
								<Card style={{width: '18rem', bg : 'secondary'}}>
									<Card.Title>
										<h1>
											{!area["place name"]
												? "Place name unknown"
												: area["place name"]}
										</h1>
									</Card.Title>
									{/* </h1> */}
									<p>{!area.state ? "State unknown" : area.state}</p>
									<h6>
										{!area["state abbreviation"]
											? "Arbbreviation unknown"
											: area["state abbreviation"]}
									</h6>
									<p>
										{!area.longitude ? "Longitude unknown" : area.longitude}
									</p>
									<p>{!area.latitude ? "Latitude unknown" : area.latitude}</p>
								</Card>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
