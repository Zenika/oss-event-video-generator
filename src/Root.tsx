import {Composition} from 'remotion';
import {Event} from './Event';
import {EventSchema} from './types/schema';
import {compositionsConfig} from './config/compositions.config';

export const RemotionRoot: () => JSX.Element[] = () => {
	return compositionsConfig.map((compositionConfig) => {
		return (
			<>
				<Composition
					id={compositionConfig.compositionId}
					component={Event}
					durationInFrames={520}
					fps={60}
					width={1920}
					height={1080}
					schema={EventSchema}
					defaultProps={compositionConfig.compositionDefaultProps}
				/>
			</>
		);
	});
};
