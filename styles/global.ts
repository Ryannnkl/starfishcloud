import { globalCss, styled } from '../stitches.config';

export const globalStyles = globalCss({
	'*': { margin: 0, padding: 0, fontFamily: 'Readex Pro, Open Sans, sans-serif'},
});


export const Row = styled('div', {
	display: 'flex',
	alignItems: 'baseline',
	variants: {
		justify: {
			between: {
				justifyContent: 'space-between',
			},
			betweenEnd: {
				justifyContent: 'space-between',
				alignItems: 'flex-end'
			},
			start: {
				justifyContent: 'flex-start'
			}
		}
	}
})
 
