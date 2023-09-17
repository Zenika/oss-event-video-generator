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

const EventTimeSchema = z.object({
	eventTime: EventSchema.shape.eventTime,
});

export const EventTime: React.FC<z.infer<typeof EventTimeSchema>> = ({
	eventTime,
}) => {
	const {fontFamily} = loadFont();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = spring({
		frame: frame - 30,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 60,
	});
	const drop = spring({
		frame: frame - 20,
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
				src={staticFile('images/icons/clock.png')}
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
				{eventTime}
			</span>
		</div>
	);
};
