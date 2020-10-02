import React from "react";

import { Container } from "./styles";

import BackgroundVideo from "../../assets/img/backgroundVideo.mp4";
const Video: React.FC = () => {
	return (
		<Container autoPlay muted loop>
			<source type="video/mp4" src={BackgroundVideo} />
		</Container>
	);
};

export default Video;
