import {z} from 'zod';
import {EventSchema} from '../../../types/schema';

export const hacktoberfestOctober15Live: z.infer<typeof EventSchema> = {
	eventTitle: 'Hacktoberfest @Zenika',
	eventDescription:
		'Octobre est synonyme d’Hacktoberfest, le mois célébrant l’Open Source. Dans ce live, nous échangerons un expert de l\'Open Source, Sylvain (alias Gouz), avec qui nous échangerons sur son expérience dans ce domaine, ses projets opensource, ses contributions et nous pourrons répondre à vos questions durant ce live. ',
	eventDate: new Date('2024-10-15T07:39:11.586Z'),
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
			name: 'Sylvain Gougouzian',
			company: 'Zenika Clermont-Ferrand',
			picture: 'https://media.licdn.com/dms/image/v2/D4E03AQHVvMhZ1JNBgQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678624045664?e=1732752000&v=beta&t=lgWi92vBupqlB3b6JH3K5HYmOyAEnGzKULLAc0PwWSE',
		},
		{
			name: 'Jean-Phi Baconnais',
			company: 'Zenika Nantes',
			picture: 'https://pbs.twimg.com/profile_images/1450357066749644800/GvDZOM_Y_400x400.jpg',
				},
	],
};
