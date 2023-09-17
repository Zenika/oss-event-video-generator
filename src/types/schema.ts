import {z} from 'zod';
import {AGENCIES} from '../constants/agencies';

const SpeakerSchema = z.object({
	name: z.string(),
	company: z.string(),
	picture: z.string().url(),
});

export const EventSchema = z.object({
	eventTitle: z.string(),
	eventDescription: z.string(),
	eventDate: z.date(),
	eventTime: z.string(),
	eventLive: z.boolean(),
	eventWorld: z.boolean(),
	eventLocation: z.array(
		z.enum(Object.values(AGENCIES) as [string, ...string[]])
	),
	eventLocationFontSize: z.number().min(30).max(80),
	speakers: z.array(SpeakerSchema),
});
