import React from 'react';
import {z} from 'zod';
import {EventSchema} from '../../types/schema';
import {loadFont} from '@remotion/google-fonts/Nunito';
import {Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const TalkTextSchema = z.object({
	eventTitle: EventSchema.shape.eventTitle,
	eventDescription: EventSchema.shape.eventDescription,
});

export const TalkText: React.FC<z.infer<typeof TalkTextSchema>> = ({
	eventTitle,
	eventDescription,
}) => {
	const DELAY_DESCRIPTION = 10;
	const {fontFamily} = loadFont();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = (delay = 0) =>
		spring({
			frame: frame - 50 - delay,
			from: 0,
			to: 1,
			fps,
			durationInFrames: 60,
		});

	const slideRight = (delay = 0) =>
		spring({
			frame: frame - 50 - delay,
			from: -500,
			to: 0,
			fps,
			durationInFrames: 70,
			config: {
				damping: 12,
			},
		});

	return (
		<Sequence name="TalkText" from={20} layout="none">
			<h1
				style={{
					opacity: opacity(),
					fontFamily,
					fontSize: '4rem',
					marginBottom: 0,
					paddingTop: 30,
					transform: `translateX(${slideRight()}px)`,
				}}
			>
				{eventTitle}
			</h1>
			<p
				style={{
					fontFamily,
					opacity: opacity(DELAY_DESCRIPTION),
					fontSize: '1.8rem',
					transform: `translateX(${slideRight(DELAY_DESCRIPTION)}px)`,
				}}
			>
				{eventDescription}
			</p>
		</Sequence>
	);
};
