import React from "react";
import { GuestHomeHero } from "./components/Heros";
import { LoggedInHomeHero } from "./components/Heros";
import { MobileHomeHero } from "./components/Heros";
import { GuestCommunityHero } from "./components/Heros";
import { LoggedInCommunityHero } from "./components/Heros";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			{/* <GuestHomeHero /> */}
			{/* <LoggedInHomeHero /> */}
			{/* <GuestCommunityHero /> */}
			<LoggedInCommunityHero />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
