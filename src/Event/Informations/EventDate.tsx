import React from 'react';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Nunito';
import {z} from 'zod';
import {EventSchema} from '../../types/schema';

const EventDateSchema = z.object({
	eventDate: EventSchema.shape.eventDate,
});

export const EventDate: React.FC<z.infer<typeof EventDateSchema>> = ({
	eventDate,
}) => {
	const {fontFamily} = loadFont();
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
				flexDirection: 'column',
				alignItems: 'center',
				gap: 20,
				transform: `translateY(${drop}px)`,
			}}
		>
			<Img
				src={staticFile('images/icons/calendar.png')}
				style={{
					width: 100,
					height: 'auto',
				}}
			/>
			<span
				style={{
					fontFamily,
					fontSize: '2.5rem',
					fontWeight: 'bold',
				}}
			>
				{eventDate.toDateString()}
			</span>
		</div>
	);
};
