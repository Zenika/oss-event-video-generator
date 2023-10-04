import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React from 'react';
import {loadFont} from '@remotion/google-fonts/Nunito';

export const Introduction: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const {fontFamily} = loadFont();

	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 60});
	const drop = spring({frame, from: -1200, to: 0, fps, durationInFrames: 60});
	const slideUp = spring({
		frame: frame - 30,
		from: 200,
		to: 0,
		fps,
		durationInFrames: 50,
		config: {
			damping: 100,
			mass: 1,
			stiffness: 100,
		},
	});

	const Zoom = interpolate(frame, [100, 150], [1, 500], {
		easing: Easing.bezier(1, 0, 0.2, 0.3),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{background: 'linear-gradient(45deg, #EE2238, #BF1D67)'}}
		>
			<div
				style={{
					opacity,
					height: '100%',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					transform: `scale(${Zoom})`,
				}}
			>
				<Img
					src={staticFile('images/icon_color.png')}
					style={{width: 500, height: 500, transform: `translateY(${drop}px)`}}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'absolute',
						bottom: 50,
						transform: `translateY(${slideUp}px)`,
					}}
				>
					<span
						style={{
							fontFamily,
							color: 'white',
							fontSize: 50,
							fontWeight: 'bold',
							paddingRight: 20,
						}}
					>
						OSS by
					</span>
					<Img
						src={staticFile('images/logo_zenika_white.png')}
						style={{width: 150, height: 'auto'}}
					/>
				</div>
			</div>
		</AbsoluteFill>
	);
};
