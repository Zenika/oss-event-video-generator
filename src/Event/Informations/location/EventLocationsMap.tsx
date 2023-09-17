import React from 'react';
import {
	Img,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';
import {EventSchema} from '../../../types/schema';
import {EventLocationsPoints} from './EventLocationsPoints';

const EventLocationMapSchema = z.object({
	eventLocation: EventSchema.shape.eventLocation,
});

export const EventLocationsMap: React.FC<
	z.infer<typeof EventLocationMapSchema>
> = ({eventLocation}) => {
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
				src={staticFile('images/map.png')}
				style={{
					width: '50%',
					height: 'auto',
					marginTop: 50,
					marginLeft: 50,
					transform: `scale(${mapScaleUp})`,
				}}
			/>
			<Sequence name="Location Points" from={70} layout="none">
				<EventLocationsPoints eventLocation={eventLocation} />
			</Sequence>
		</>
	);
};
