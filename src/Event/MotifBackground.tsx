import {
	AbsoluteFill,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import React from 'react';

export const MotifBackground: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 0.1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Img
				src={staticFile('images/motif_zenika.svg')}
				style={{
					opacity,
					width: '100%',
					height: 'auto',
				}}
			/>
		</AbsoluteFill>
	);
};
