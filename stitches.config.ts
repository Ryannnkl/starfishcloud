import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
	theme: {
		colors: {
			primary: 'hsl(206,22%,99%)',
			secondary: 'hsl(206,10%,84%)',
			text: '#333',
			textSecondary: '#434531',
			error: '#ea2423',
			hiContrast: 'hsl(206,10%,5%)',
			loContrast: 'white',
			gray100: 'hsl(206,22%,99%)',
			gray200: 'hsl(206,12%,97%)',
			gray300: 'hsl(206,11%,92%)',
			gray400: 'hsl(206,10%,84%)',
			gray500: 'hsl(206,10%,76%)',
			gray600: 'hsl(206,10%,44%)',

			purple100: 'hsl(252,100%,99%)',
			purple200: 'hsl(252,100%,98%)',
			purple300: 'hsl(252,100%,94%)',
			purple400: 'hsl(252,75%,84%)',
			purple500: 'hsl(252,78%,60%)',
			purple600: 'hsl(252,80%,53%)',
		},
		space: {
			1: '6px',
			2: '12px',
			3: '16px',
			4: '18px',
			5: '22px',
			6: '26px',
			7: '30px',
			8: '34px',
		},
		sizes: {
			1: '6px',
			2: '12px',
			3: '16px',
			4: '18px',
			5: '22px',
			6: '26px',
			7: '30px',
			8: '34px',
		},
		fontSizes: {
			1: '12px',
			2: '14px',
			3: '22px',
			4: '36px',
			5: '64px',
			6: '74px',
			7: '104px',
			8: '120px'
		},
		fonts: {
			system: 'system-ui',
			primary: 'Readex Pro, Open Sans, sans-serif',
			secondary: 'Montserrat, Open Sans, sans-serif'
		},
	},
	utils: {
		marginX: (value: Stitches.PropertyValue<'margin'>) => ({
			marginLeft: value,
			marginRight: value,
		}),
		marginY: (value: Stitches.PropertyValue<'margin'>) => ({
			marginTop: value,
			marginBottom: value,
		}),
		paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
	},
	media: {
		bp1: '(max-width: 520px)',
		bp2: '(max-width: 900px)',
	},
});
