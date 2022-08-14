import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { keyframes } from '@stitches/react';
import { styled } from '../../stitches.config';

export const TeamContainer = styled('div', {
	width: '100%',
	display: 'grid',
	justifyContent: 'center',
	gridTemplateColumns: 'repeat( auto-fill, minmax(100px, 260px) );',
  gridTemplateRows: 'auto',
	gap: '$1',
	gridGap: '$4',
  marginTop: '$6',
  marginX: '5vw',
});

export const TeamItem = styled('div', {
	background: 'White',
	borderRadius: 8,
	padding: '$3',
	display: 'flex',
	flexDirection: 'column',
	height: 'fit-content',
});

export const AvatarImage = styled('div', {
	width: 60,
	height: 60,
	borderRadius: 60 / 2,
	background: '#101010',
	color: '#fff',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const Label = styled('span', {
	color: '#010101',
	fontSize: '$2',
	fontWeight: '700',
	variants: {
		color: {
			secondary: {
				color: '$textSecondary',
			},
		},
	},
});

export const TeamContent = styled('p', {
	fontSize: '$2',
	fontWeight: '500',
	padding: '$1',
	color: '#101010',
});

export const ContactButton = styled('button', {
	color: '#fff',
	fontWeight: '600',
	fontSize: '$2',
	width: 'fit-content',
	background: '#010101',
	border: 'none',
	borderRadius: 4,
	padding: '6px 12px',
	alignSelf: 'flex-end',
	cursor: 'pointer',
  marginTop: '$2',
	'&:hover': {
		backgroundColor: '#111',
	},
});

// tooltip styles

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

export const TooltipContent = styled(TooltipPrimitive.Content, {
	borderRadius: 4,
	padding: '10px 15px',
	fontSize: 15,
	lineHeight: 1,
	color: '#fff',
	backgroundColor: '#010101',
	boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	userSelect: 'none',
	'@media (prefers-reduced-motion: no-preference)': {
		animationDuration: '400ms',
		animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
		willChange: 'transform, opacity',
		'&[data-state="delayed-open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade },
		},
	},
});

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
	fill: '#010101',
});

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
