import {z} from 'zod';
import {EventSchema} from '../../types/schema';

export const hacktoberfestOctober3Agences: z.infer<typeof EventSchema> = {
	eventTitle: 'Hacktoberfest @Zenika',
	eventDescription:
		'Octobre est synonyme d’Hacktoberfest, le mois célébrant l’Open Source. Cette année, les agences Zenika vous accueillent dans leurs locaux pour vous aider et vous accompagner dans votre Hacktoberfest 💪. Il y a différentes manières de contribuer sans développer alors nous vous donnons rendez-vous dans nos agences !',
	eventDate: new Date('2023-10-03T07:39:11.586Z'),
	eventTime: '18h30 - 20h30',
	eventLive: false,
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
	speakers: [],
};
