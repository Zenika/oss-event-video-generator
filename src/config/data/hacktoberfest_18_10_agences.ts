import {z} from 'zod';
import {EventSchema} from '../../types/schema';

export const hacktoberfestOctober18Agences: z.infer<typeof EventSchema> = {
	eventTitle: 'Building a high gravity community at Gitpod',
	eventDescription:
		"Pauline will be delivering a talk about the growing Gitpod community formed around cloud development environments (CDEs) it's humble beginnings to where it's headed. 🇬🇧 Talk in english.",
	eventDate: new Date('2023-10-18T07:39:11.586Z'),
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
			name: 'Pauline Narvas',
			company: 'Gitpod',
			picture:
				'https://pbs.twimg.com/profile_images/1643372492784824320/DeDQxMuo_400x400.jpg',
		},
	],
};
