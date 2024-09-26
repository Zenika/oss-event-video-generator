import {z} from 'zod';
import {EventSchema} from '../../../types/schema';

export const hacktoberfestOctober8Live: z.infer<typeof EventSchema> = {
	eventTitle: 'Hacktoberfest @Zenika',
	eventDescription:
		'Octobre est synonyme d’Hacktoberfest, le mois célébrant l’Open Source. Dans ce live, nous échangerons un expert de l\'Open Source, Nicolas, avec qui nous échangerons sur son expérience dans ce domaine, ses projets opensource, ses contributions et nous pourrons répondre à vos questions durant ce live. ',
	eventDate: new Date('2024-10-08T07:39:11.586Z'),
	eventTime: '12h15 - 13h00',
	eventLive: true,
	eventWorld: false,
	eventLocation: [
		'Brest' as const,
		'Clermont-Ferrand' as const,
		'Nantes' as const,
		'Niort' as const,
		'Lille' as const,
		'Lyon' as const,
		'Rennes' as const,
	],
	eventLocationFontSize: 30,
	speakers: [
		{
			name: 'Nicolas Delsaux',
			company: 'Zenika Lille',
			picture: 'https://media.licdn.com/dms/image/v2/C5603AQEx8sUozhIYxg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1584086752842?e=1732752000&v=beta&t=0AL-zkzrdj7TAH9k9gCMWVZzyfKvb1z2rLgNXiftnyo',
		},
		{
			name: 'Jean-Phi Baconnais',
			company: 'Zenika Nantes',
			picture: 'https://pbs.twimg.com/profile_images/1450357066749644800/GvDZOM_Y_400x400.jpg',
				},
	],
};
