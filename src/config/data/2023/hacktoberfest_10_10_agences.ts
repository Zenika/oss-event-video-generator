import {z} from 'zod';
import {EventSchema} from '../../../types/schema';

export const hacktoberfestOctober10Agences: z.infer<typeof EventSchema> = {
	eventTitle: 'Hacktoberfest @Zenika : Framasoft a presque 20 ans. Ce que nous avons appris',
	eventDescription: 'L’agence de Zenika Lyon reçoit Pierre-Yves Gosset, codirecteur de Framasoft, pour vous proposer un REX sur ces vingts années d\'aventure dans le monde de l\'Open source 💪. L\'évènement sera également disponible sur les chaînes Youtube et Twitch de Zenika.',
	eventDate: new Date('2023-10-10T07:39:11.586Z'),
	eventTime: '18h30 - 20h30',
	eventLive: false,
	eventWorld: false,
	eventLocation: [
		'Lyon' as const
	],
	eventLocationFontSize: 30,
	speakers: [
		{
			name: 'Pierre-Yves Gosset',
			company: 'Framasoft',
			picture:
				'https://media.licdn.com/dms/image/D4D03AQHa7z4xLyK0LA/profile-displayphoto-shrink_800_800/0/1695214614873?e=1701907200&v=beta&t=46EHlEmhMr3Z5fuNFVW25UOegOq15SsLL0eHq6XkOWI',
		},
	],
};
