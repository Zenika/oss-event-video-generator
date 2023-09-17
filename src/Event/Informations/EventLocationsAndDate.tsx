import React from 'react';
import {EventDate} from './EventDate';
import {EventTime} from './EventTime';
import {EventLocations} from './location/EventLocations';
import {z} from 'zod';
import {EventSchema} from '../../types/schema';
import {Sequence} from 'remotion';

const EventLocationAndDateSchema = z.object({
	eventDate: EventSchema.shape.eventDate,
	eventTime: EventSchema.shape.eventTime,
	eventLive: EventSchema.shape.eventLive,
	eventWorld: EventSchema.shape.eventWorld,
	eventLocation: EventSchema.shape.eventLocation,
	eventLocationFontSize: EventSchema.shape.eventLocationFontSize,
});

export const EventLocationsAndDate: React.FC<
	z.infer<typeof EventLocationAndDateSchema>
> = ({
	eventDate,
	eventTime,
	eventLive,
	eventWorld,
	eventLocation,
	eventLocationFontSize,
}) => {
	return (
		<div
			style={{
				paddingTop: 50,
				width: '50%',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 60,
			}}
		>
			<div
				style={{
					display: 'flex',
					gap: 50,
				}}
			>
				<Sequence name="Event Date" from={120} layout="none">
					<EventDate eventDate={eventDate} />
				</Sequence>
				<Sequence name="Event Time" from={120} layout="none">
					<EventTime eventTime={eventTime} />
				</Sequence>
			</div>
			<Sequence name="Event Locations" from={180} layout="none">
				<EventLocations
					eventLocation={eventLocation}
					eventLocationFontSize={eventLocationFontSize}
					eventLive={eventLive}
					eventWorld={eventWorld}
				/>
			</Sequence>
		</div>
	);
};
