import React from 'react';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';
import {EventSchema} from '../../../types/schema';
import {loadFont} from '@remotion/google-fonts/Nunito';
import {EventLocationsMap} from './EventLocationsMap';
import {AGENCIES} from '../../../constants/agencies';
import {EVENT_TYPES} from '../../../constants/constants';
import {EventLocationsLive} from './EventLocationsLive';

const EventLocationSchema = z.object({
	eventLocation: EventSchema.shape.eventLocation,
	eventLocationFontSize: EventSchema.shape.eventLocationFontSize,
	eventLive: EventSchema.shape.eventLive,
	eventWorld: EventSchema.shape.eventWorld,
});

export const EventLocations: React.FC<z.infer<typeof EventLocationSchema>> = ({
	eventLocation,
	eventLocationFontSize,
	eventLive,
	eventWorld,
}) => {
	const {fontFamily} = loadFont();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const locationList = eventLocation.join(', ');
	const getEventType = () => {
		if (eventWorld || eventLocation.length >= Object.keys(AGENCIES).length) {
			return EVENT_TYPES.WORLD;
		}
		if (eventLive) {
			return EVENT_TYPES.LIVE;
		}
		return EVENT_TYPES.DEFAULT;
	};

	const locationListOpacity = spring({
		frame: frame - 20,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 50,
	});

	const locationListSlideUp = spring({
		frame: frame - 20,
		from: -300,
		to: 0,
		fps,
		durationInFrames: 50,
		config: {
			damping: 13,
		},
	});

	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 80,
			}}
		>
			{getEventType() === EVENT_TYPES.LIVE && <EventLocationsLive />}
			{getEventType() === EVENT_TYPES.WORLD && (
				<EventLocationsMap
					eventLocation={EventSchema.shape.eventLocation.parse(
						Object.values(AGENCIES)
					)}
				/>
			)}
			{getEventType() === EVENT_TYPES.DEFAULT && (
				<EventLocationsMap eventLocation={eventLocation} />
			)}
			<div
				style={{
					opacity: locationListOpacity,
					width: '70%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 20,
					transform: `translateY(${-locationListSlideUp}px)`,
				}}
			>
				<Img
					src={staticFile('images/icons/location.png')}
					style={{
						width: 80,
						height: 'auto',
					}}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
						gap: 10,
					}}
				>
					<span
						style={{
							fontFamily,
							fontSize: `${eventLocationFontSize}px`,
							fontWeight: 'bold',
						}}
					>
						{
							{
								[EVENT_TYPES.DEFAULT]: locationList,
								[EVENT_TYPES.LIVE]: 'Événement en ligne',
								[EVENT_TYPES.WORLD]: 'Événement dans toutes les agences',
							}[getEventType()]
						}
					</span>
				</div>
			</div>
		</div>
	);
};
