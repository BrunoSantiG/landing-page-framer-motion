import React from "react";
import FirstAndSecond from "./component/FirstAndSecond";
import Header from "./component/Header";

import GlobalStyles from "./styles/global";
import { Main, Section, Sticky } from "./styles/index";
function App() {
	return (
		<React.Fragment>
			<Header />
			<Main style={{ height: "1610vh" }}>
				<Section style={{ height: "72.7%" }}>
					<FirstAndSecond />
				</Section>

				<Section style={{ height: "9.7%" }}>
					<Sticky className="third" />
				</Section>

				<Section style={{ height: "10.1%" }}>
					<Sticky className="fourth" />
				</Section>
			</Main>

			<GlobalStyles />
		</React.Fragment>
	);
}

export default App;
