import Link from 'next/link';
import { Row } from '../../styles/global';
import { ContainerCard, NumberCard, TextCard } from './styles';

interface ICardProps {
	name: string;
	number: string;
	link: string;
}

export default function CardServer({ name, number, link }: ICardProps) {
	return (
		<Link href={link} passHref>
			<ContainerCard target="_blank">
				<TextCard size="title">Proxmox</TextCard>
				<Row justify="betweenEnd">
					<TextCard size="lg">{name}</TextCard>
					<NumberCard>{'0' + number}</NumberCard>
				</Row>
			</ContainerCard>
		</Link>
	);
}
