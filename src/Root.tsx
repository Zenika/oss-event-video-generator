import React from 'react';
import {Composition} from 'remotion';
import {Event} from './Event';
import {EventSchema} from './types/schema';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="OSS-Zenika-Event"
				component={Event}
				durationInFrames={520}
				fps={60}
				width={1920}
				height={1080}
				schema={EventSchema}
				defaultProps={{
					eventTitle: 'OSS Zenika Event',
					eventDescription:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget quam eu tortor ullamcorper maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas egestas suscipit enim ut venenatis. Vivamus sed est sed mi consectetur lobortis. Suspendisse nec ultricies massa. Suspendisse consectetur blandit purus, aliquam malesuada lectus consectetur nec. Etiam sed porta erat.',
					eventDate: new Date('2023-09-15T07:39:11.586Z'),
					eventTime: '18h30 - 20h30',
					eventLive: false,
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
					speakers: [
						{
							name: 'Mickaël Alves',
							company: 'Zenika',
							picture:
								'https://pbs.twimg.com/profile_images/1635742650090283013/9qflRryB_400x400.jpg',
						},
					],
				}}
			/>
		</>
	);
};
