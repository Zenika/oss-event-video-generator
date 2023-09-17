import {AGENCIES_LOCATION} from '../../../constants/agencies';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React from 'react';
import {z} from 'zod';
import {EventSchema} from '../../../types/schema';

const EventLocationsPointsSchema = z.object({
	eventLocation: EventSchema.shape.eventLocation,
});

export const EventLocationsPoints: React.FC<
	z.infer<typeof EventLocationsPointsSchema>
> = ({eventLocation}) => {
	const DELAY = 2;
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<>
			{eventLocation.map((location, index) => {
				const {positionX, positionY} = AGENCIES_LOCATION[location];

				const opacity = spring({
					frame: frame - DELAY * index,
					from: 0,
					to: 1,
					fps,
					durationInFrames: 50,
				});
				const drop = spring({
					frame: frame - DELAY * index,
					from: -20,
					to: 0,
					fps,
					durationInFrames: 100,
					config: {
						damping: 15,
					},
				});

				return (
					<Img
						src={staticFile('images/icons/location_black.png')}
						style={{
							opacity,
							width: 40,
							position: 'absolute',
							bottom: `${positionY}px`,
							right: `${positionX}px`,
							height: 'auto',
							transform: `translateY(${drop}px)`,
						}}
					/>
				);
			})}
		</>
	);
};
