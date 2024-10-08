import {z} from 'zod';
import {EventSchema} from '../../../types/schema';

export const hacktoberfestOctober22Live: z.infer<typeof EventSchema> = {
	eventTitle: 'Hacktoberfest @Zenika',
	eventDescription:
		'Octobre est synonyme d’Hacktoberfest, le mois célébrant l’Open Source. Dans ce live, nous échangerons un expert de l\'Open Source, Sacha, avec qui nous échangerons sur son expérience dans ce domaine, ses projets opensource, ses contributions et nous pourrons répondre à vos questions durant ce live. ',
	eventDate: new Date('2024-10-22T07:39:11.586Z'),
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
			name: 'Sacha Bouillez',
			company: 'Zenika Lille',
			picture: 'https://media.licdn.com/dms/image/v2/D4E03AQGMDVT251k1ww/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1668817243339?e=1733961600&v=beta&t=AEpElkWepSFZxeNI3my9XFgsSKJgvx0D5RJg6YA4dCA',
		},
		{
			name: 'Jean-Phi Baconnais',
			company: 'Zenika Nantes',
			picture: 'https://pbs.twimg.com/profile_images/1450357066749644800/GvDZOM_Y_400x400.jpg',
				},
	],
};
