import React from 'react';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const EventLocationsLive: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const mapScaleUp = spring({
		frame: frame - 10,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 50,
	});

	return (
		<>
			<Img
				src={staticFile('images/icons/video.png')}
				style={{
					width: '50%',
					height: 'auto',
					marginTop: 50,
					marginLeft: 50,
					transform: `scale(${mapScaleUp})`,
				}}
			/>
		</>
	);
};
