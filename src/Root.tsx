import React from 'react';
import {Composition} from 'remotion';
import {Event} from './Event';
import {EventSchema} from './types/schema';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="3-10-event-live"
				component={Event}
				durationInFrames={520}
				fps={60}
				width={1920}
				height={1080}
				schema={EventSchema}
				defaultProps={{
					eventTitle: 'Live Hacktoberfest @Zenika',
					eventDescription:
						'Octobre est synonyme d’Hacktoberfest, le mois célébrant l’Open Source. Cette année, les agences Zenika vous accueillent dans leurs locaux et sur une session live pour vous aider et vous accompagner dans votre Hacktoberfest 💪. Vous ne connaissez pas du tout cet événement et / ou l’open source ? Vous souhaitez proposer votre première contribution sans savoir par ou commencer ? Vous êtes mainteneurs d’un projet et vous avez besoin d’aide ? Vous n’êtes pas développeur ? Pas de soucis, vous avez largement votre place dans cet évènement. Il y a différentes manières de contribuer sans développer ! 📺 Venez nous retrouver le mardi 3 octobre à partir de 18h30 sur Youtube : Zenikatv | Twitch : zenikait',
					eventDate: new Date('2023-10-03T07:39:11.586Z'),
					eventTime: '18h30 - 20h30',
					eventLive: true,
					eventWorld: false,
					eventLocation: [
						'Brest' as const,
						'Bordeaux' as const,
						'Casablanca' as const,
						'Clermont-Ferrand' as const,
						'Lyon' as const,
						'Nantes' as const,
						'Niort' as const,
						'Paris' as const,
						'Rennes' as const,
						'Toulouse' as const,
						'Montréal' as const,
						'Singapour' as const,
					],
					eventLocationFontSize: 30,
					speakers: [],
				}}
			/>
			<Composition
				id="3-10-event-agences"
				component={Event}
				durationInFrames={520}
				fps={60}
				width={1920}
				height={1080}
				schema={EventSchema}
				defaultProps={{
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
						'Rennes' as const
					],
					eventLocationFontSize: 30,
					speakers: [
					],
				}}
			/>


			<Composition
				id="10-10-event-agences"
				component={Event}
				durationInFrames={520}
				fps={60}
				width={1920}
				height={1080}
				schema={EventSchema}
				defaultProps={{
					eventTitle: 'xxxxxx',
					eventDescription:
						'xxxxxx',
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
						'Rennes' as const
					],
					eventLocationFontSize: 30,
					speakers: [
						{
							name: 'xxx',
							company: 'Framasoft',
							picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq1Py360jsQbB3RUvIy87YsSFUBCXq4QkjceOPrhQAA&s'
						}
					],
				}}
			/>

			<Composition
				id="18-10-event-agences"
				component={Event}
				durationInFrames={520}
				fps={60}
				width={1920}
				height={1080}
				schema={EventSchema}
				defaultProps={{
					eventTitle: 'Building a high gravity community at Gitpod',
					eventDescription:
						'Pauline will be delivering a talk about the growing Gitpod community formed around cloud development environments (CDEs) it\'s humble beginnings to where it\'s headed. 🇬🇧 Talks in english.',
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
						'Rennes' as const
					],
					eventLocationFontSize: 30,
					speakers: [
						{
							name: 'Pauline Narvas',
							company: 'Gitpod',
							picture: 'https://pbs.twimg.com/profile_images/1643372492784824320/DeDQxMuo_400x400.jpg'
						}
					],
				}}
			/>
		</>
	);
};
