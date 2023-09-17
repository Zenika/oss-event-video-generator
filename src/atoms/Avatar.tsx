import React from 'react';
import {
	AbsoluteFill,
	Img,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Text} from './Text';

export const Avatar: React.FC<{
	imageSrc: string;
	name?: string;
	company?: string;
}> = ({imageSrc, name, company}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = spring({
		frame: frame - 10,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 60,
	});
	const drop = spring({
		frame,
		from: -1200,
		to: 0,
		fps,
		durationInFrames: 70,
		config: {
			damping: 12,
		},
	});

	return (
		<div
			style={{
				opacity,
				display: 'flex',
				alignSelf: 'flex-start',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 15,
				transform: `translateY(${drop}px)`,
			}}
		>
			<AbsoluteFill
				style={{
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: 220,
					width: 220,
					borderRadius: '50%',
					background: 'linear-gradient(45deg, #EE2238, #BF1D67)',
				}}
			>
				<Img
					style={{
						height: 200,
						width: 200,
						borderRadius: '50%',
						objectFit: 'cover',
					}}
					src={imageSrc}
				/>
			</AbsoluteFill>
			{name && (
				<Text
					style={{
						fontSize: '2.5rem',
						fontWeight: 'bold',
						background: '-webkit-linear-gradient(#EE2238, #BF1D67)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
				>
					{name}
				</Text>
			)}
			{company && (
				<Text
					style={{
						color: '#3f3f3f',
						fontSize: '1.8rem',
						fontWeight: 'bold',
					}}
				>
					{company}
				</Text>
			)}
		</div>
	);
};
