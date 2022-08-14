import { styled } from '../../stitches.config';
import * as AccordionLib from '@radix-ui/react-accordion';
import { keyframes } from '@stitches/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const slideDown = keyframes({
	from: { height: 0 },
	to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
	from: { height: 'var(--radix-accordion-content-height)' },
	to: { height: 0 },
});

export const Accordion = styled(AccordionLib.Root, {
	display: 'flex',
	width: '100%',
	marginX: '10vw',
	maxWidth: '100vw',
	flexDirection: 'column',
	'@bp1': {
		marginY: '$7',
	},
});

export const AccordionItem = styled(AccordionLib.Item, {
	overflow: 'hidden',
	width: '100%',
	background: 'transparent',
	border: '1px solid #222',
	marginBottom: 6,
	cursor: 'pointer',
	'&:focus-within': {
		position: 'relative',
		zIndex: 1,
	},
	'&[data-state="open"]': {
		boxShadow: '-1px 1px 8px 2px #0B4B8640',
	},
	'@bp1': {
		alignSelf: 'center',
		width: '90%',
	},
});

export const AccordionHeader = styled(AccordionLib.AccordionHeader, {
	all: 'unset',
	display: 'flex',
});

export const AccordionTrigger = styled(AccordionLib.AccordionTrigger, {
	all: 'unset',
	padding: '0 20px',
	fontWeight: '200',
	backgroundColor: '$backgroundAlt',
	height: 60,
	flex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	fontSize: '$3',
	lineHeight: 1,
	color: '$text',
	'&[data-state="closed"]': { backgroundColor: '$backgroundAlt' },
	'&[data-state="open"]': { backgroundColor: '#161616' },
	'&:hover': { backgroundColor: '#161616' },
});

export const AccordionContent = styled(AccordionLib.Content, {
	overflow: 'hidden',
	fontSize: '$3',
	color: '$text',
	fontWeight: '300',
	margin: 20,
	'&[data-state="open"]': {
		animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
	},
	'&[data-state="closed"]': {
		animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
	},
});

export const ChevronIcon = styled(ChevronDownIcon, {
	color: 'white',
	transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
	'[data-state=open] &': { transform: 'rotate(180deg)' },
});
