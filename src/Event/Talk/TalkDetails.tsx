import React from 'react';
import {Avatar} from '../../atoms/Avatar';
import {
	Img,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {EventSchema} from '../../types/schema';
import {z} from 'zod';
import {TalkText} from './TalkText';

const TalkDetailsSchema = z.object({
	eventTitle: EventSchema.shape.eventTitle,
	eventDescription: EventSchema.shape.eventDescription,
	speakers: EventSchema.shape.speakers,
});

export const TalkDetails: React.FC<z.infer<typeof TalkDetailsSchema>> = ({
	eventTitle,
	eventDescription,
	speakers,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = spring({
		frame: frame - 50,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 80,
	});

	return (
		<div
			style={{
				paddingTop: 50,
				width: '50%',
				paddingLeft: 100,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Sequence name="Speaker" layout="none">
				{speakers.map((speaker) => (
					<Avatar
						imageSrc={speaker.picture}
						name={speaker.name}
						company={speaker.company}
					/>
				))}
			</Sequence>
			<TalkText eventTitle={eventTitle} eventDescription={eventDescription} />
			<Img
				src={staticFile('images/logo_zenika.png')}
				style={{
					opacity,
					position: 'absolute',
					bottom: 70,
					width: 150,
					height: 'auto',
				}}
			/>
		</div>
	);
};
