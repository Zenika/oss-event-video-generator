import {z} from 'zod';
import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {EventSchema} from './types/schema';
import {Introduction} from './Event/Intro';
import {MotifBackground} from './Event/MotifBackground';
import {EventDetails} from './Event/EventDetails';

export const Event: React.FC<z.infer<typeof EventSchema>> = ({
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
		<AbsoluteFill id="compositionEvent">
			<Audio
				volume={0.2}
				src={staticFile(
					'audio/total-happy-up-and-sunny-by-sascha-ende-from-filmmusic-io.mp3'
				)}
			/>
			<Sequence name="Intro Logo" durationInFrames={150}>
				<Introduction />
			</Sequence>
			<Sequence name="Event Details" from={120}>
				<MotifBackground />
				<EventDetails
					eventTitle={eventTitle}
					eventDescription={eventDescription}
					eventDate={eventDate}
					eventTime={eventTime}
					eventLive={eventLive}
					eventWorld={eventWorld}
					eventLocation={eventLocation}
					eventLocationFontSize={eventLocationFontSize}
					speakers={speakers}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
