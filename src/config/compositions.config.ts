import {z} from 'zod';
import {EventSchema} from '../types/schema';
import {hacktoberfestOctober3Live} from './data/hacktoberfest_3_10_live';
import {hacktoberfestOctober18Agences} from './data/hacktoberfest_18_10_agences';
import {hacktoberfestOctober3Agences} from './data/hacktoberfest_3_10_agences';
import {hacktoberfestOctober10Agences} from './data/hacktoberfest_10_10_agences';

type CompositionConfigType = {
	compositionId: string;
	compositionDefaultProps: z.infer<typeof EventSchema>;
};

export const compositionsConfig: CompositionConfigType[] = [
	{
		compositionId: '3-10-event-live',
		compositionDefaultProps: hacktoberfestOctober3Live,
	},
	{
		compositionId: '3-10-event-agences',
		compositionDefaultProps: hacktoberfestOctober3Agences,
	},
	{
		compositionId: '10-10-event-agences',
		compositionDefaultProps: hacktoberfestOctober10Agences,
	},
	{
		compositionId: '18-10-event-agences',
		compositionDefaultProps: hacktoberfestOctober18Agences,
	},
];
