import { useTransform, useViewportScroll } from "framer-motion";
import React from "react";

import EdificioImg from "../../assets/img/museu-da-moda.jpg";

import { Image } from "./styles";

const EdificioNiemeyer: React.FC = () => {
	const { scrollYProgress } = useViewportScroll();
	const rightSideY = useTransform(
		scrollYProgress,
		[0.047, 0.093],
		["58vh", "0vh"]
	);
	const rightSideScale = useTransform(
		scrollYProgress,
		[0.047, 0.093, 0.198, 0.264],
		[0, 0.511, 0.511, 1]
	);
	return (
		<Image
			src={EdificioImg}
			style={{
				y: rightSideY,
				scale: rightSideScale,
			}}
		/>
	);
};

export default EdificioNiemeyer;
