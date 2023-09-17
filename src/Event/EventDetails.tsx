import React from 'react';
import {z} from 'zod';
import {EventSchema} from '../types/schema';
import {AbsoluteFill} from 'remotion';
import {TalkDetails} from './Talk/TalkDetails';
import {EventLocationsAndDate} from './Informations/EventLocationsAndDate';

export const EventDetails: React.FC<z.infer<typeof EventSchema>> = ({
	eventTitle,
	eventDescription,
	eventDate,
	eventTime,
	eventLive,
	eventWorld,
	eventLocation,
	eventLocationFontSize,
	speakers,
}) => {
	return (
		<AbsoluteFill
			style={{
				width: '100%',
				flexDirection: 'row',
			}}
		>
			<TalkDetails
				eventTitle={eventTitle}
				eventDescription={eventDescription}
				speakers={speakers}
			/>
			<EventLocationsAndDate
				eventDate={eventDate}
				eventTime={eventTime}
				eventLive={eventLive}
				eventWorld={eventWorld}
				eventLocation={eventLocation}
				eventLocationFontSize={eventLocationFontSize}
			/>
		</AbsoluteFill>
	);
};
