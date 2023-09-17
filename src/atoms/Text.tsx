import React, {ReactNode} from 'react';
import {loadFont} from '@remotion/google-fonts/Nunito';

export const Text: React.FC<{
	children: ReactNode;
	style?: React.CSSProperties;
}> = ({children, style}) => {
	const {fontFamily} = loadFont();

	return (
		<span
			style={{
				fontFamily,
				height: 'max-content',
				margin: 0,
				padding: '0 20px',
				fontSize: '1.5rem',
				color: 'white',
				...style,
			}}
		>
			{children}
		</span>
	);
};
