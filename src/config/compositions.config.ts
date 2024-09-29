import {z} from 'zod';
import {EventSchema} from '../types/schema';
import {hacktoberfestOctober3Live} from './data/2023/hacktoberfest_3_10_live';
import {hacktoberfestOctober18Agences} from './data/2023/hacktoberfest_18_10_agences';
import {hacktoberfestOctober3Agences} from './data/2023/hacktoberfest_3_10_agences';
import {hacktoberfestOctober10Agences} from './data/2023/hacktoberfest_10_10_agences';
import {hacktoberfestOctober8Live} from './data/2024/hacktoberfest_8_10';
import {hacktoberfestOctober15Live} from './data/2024/hacktoberfest_15_10';

type CompositionConfigType = {
	compositionId: string;
	compositionDefaultProps: z.infer<typeof EventSchema>;
};

export const compositionsConfig: CompositionConfigType[] = [
	{
		compositionId: '23-10-3-event-live',
		compositionDefaultProps: hacktoberfestOctober3Live,
	},
	{
		compositionId: '23-10-3-event-agences',
		compositionDefaultProps: hacktoberfestOctober3Agences,
	},
	{
		compositionId: '23-10-10-event-agences',
		compositionDefaultProps: hacktoberfestOctober10Agences,
	},
	{
		compositionId: '23-10-18-event-agences',
		compositionDefaultProps: hacktoberfestOctober18Agences,
	},
	{
		compositionId: '24-10-8-event-live',
		compositionDefaultProps: hacktoberfestOctober8Live,
	},
	{
		compositionId: '24-10-15-event-live',
		compositionDefaultProps: hacktoberfestOctober15Live,
	},
];
