import {z} from 'zod';
import {EventSchema} from '../../types/schema';

export const hacktoberfestOctober10Agences: z.infer<typeof EventSchema> = {
	eventTitle: 'xxxxxx',
	eventDescription: 'xxxxxx',
	eventDate: new Date('2023-10-10T07:39:11.586Z'),
	eventTime: '18h30 - 20h30',
	eventLive: true,
	eventWorld: false,
	eventLocation: [
		'Brest' as const,
		'Clermont-Ferrand' as const,
		'Lyon' as const,
		'Nantes' as const,
		'Niort' as const,
		'Rennes' as const,
	],
	eventLocationFontSize: 30,
	speakers: [
		{
			name: 'xxx',
			company: 'Framasoft',
			picture:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq1Py360jsQbB3RUvIy87YsSFUBCXq4QkjceOPrhQAA&s',
		},
	],
};
