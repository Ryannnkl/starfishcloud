import { styled } from '../stitches.config';

export const Container = styled('div', {
	background: '$background',
	maxWidth: '100vw',
	height: '100vh',
});

export const Section = styled('section', {
	width: '100%',
	minHeight: '100vh',
	display: 'flex',
	background: '$background',
	variants: {
		align: {
			center: {
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			},
			row: {
				alignItems: 'center',
				justifyContent: 'space-between',
			},
			col: {
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
			},
			centerAlt: {
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				background: '$backgroundAlt',
			},
			rowAlt: {
				alignItems: 'center',
				justifyContent: 'center',
				background: '$backgroundAlt',
				'@bp1': {
					flexDirection: 'column',
				},
			},
			colAlt: {
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				background: '$backgroundAlt',
			},
		},
	},
});

export const Title = styled('h1', {
	color: '$text',
	fontWeight: '700',
	fontSize: '$7',
	textAlign: 'center',
	fontFamily: '$secondary',
	// background: '-webkit-linear-gradient(45deg, #ff4b1f, #1fddff)',
	// '-webkit-background-clip': 'text',
	// '-webkit-text-fill-color': 'transparent',
	'@bp1': {
		fontSize: '$4',
		lineHeight: '100%',
		marginY: 20,
		textAlign: 'center',
	},
	variants: {
		size: {
			md: {
				fontSize: '$4',
			},
			'@bp1': {
				fontSize: '$3',
			},
		},
	},
});

export const SubTitle = styled('h2', {
	color: '$textSecondary',
	fontWeight: '400',
	fontSize: '32px',
	textAlign: 'center',
	width: '56vw',
	fontFamily: '$secondary',
	'@bp1': {
		fontSize: '$3',
	},
	variants: {
		size: {
			md: {
				fontSize: '$3',
			},
			'@bp1': {
				fontSize: '$2',
			},
		},
	},
});

export const CallToAction = styled('button', {
	border: 'none',
	display: 'flex',
	gap: 10,
	alignItems: 'center',
	width: 'fit-content',
	padding: '$3 $5',
	borderRadius: 4,
	cursor: 'pointer',
	fontSize: '$3',
	fontWeight: '500',
	marginY: 20, 
	variants: {
		type: {
			main: {
				background: '#FFF',
				color: '#222',
			}
		}
	}
})