import {z} from 'zod';
import {EventSchema} from '../../types/schema';

export const hacktoberfestOctober3Agences: z.infer<typeof EventSchema> = {
	eventTitle: 'Hacktoberfest @Zenika',
	eventDescription:
		'Octobre est synonyme d’Hacktoberfest, le mois célébrant l’Open Source. Cette année, les agences Zenika vous accueillent dans leurs locaux et sur une session live pour vous aider et vous accompagner dans votre Hacktoberfest 💪. Vous ne connaissez pas du tout cet événement et / ou l’open source ? Vous souhaitez proposer votre première contribution sans savoir par ou commencer ? Vous êtes mainteneurs d’un projet et vous avez besoin d’aide ? Vous n’êtes pas développeur ? Pas de soucis, vous avez largement votre place dans cet évènement. Il y a différentes manières de contribuer sans développer !',
	eventDate: new Date('2023-10-03T07:39:11.586Z'),
	eventTime: '18h30 - 20h30',
	eventLive: false,
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
	speakers: [],
};
