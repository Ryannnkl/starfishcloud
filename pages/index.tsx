import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { GitHub } from 'react-feather';
import { Informations } from '../components/Informations';
import NavBar from '../components/Navbar';
import Team from '../components/Team';
import { globalStyles } from '../styles/global';
import { CallToAction, Container, Section, SubTitle, Title } from '../styles/home.styles';
import { dark } from '../styles/theme/dark';
import { light } from '../styles/theme/light';

export default function Home() {
	const [theme, setTheme] = useState(dark);
	globalStyles();

	return (
		<Container className={theme}>
			<NavBar />
			<Section
				align="center"
				css={{
					background:
						'radial-gradient(circle at top left, #ff950520, rgba(255, 255, 255, 0) 40%), radial-gradient(circle at bottom right, #ff950520, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at top right, #0062b320, rgba(255, 255, 255, 0) 10%), radial-gradient(circle at bottom left, #0062b320, rgba(255, 255, 255, 0) 20%)',
				}}>
				<Title>Starfish Cloud</Title>
				<SubTitle>
					Projeto e implementação de um provedor de Cloud de alta disponibilidade utilizando
					hardware legado
				</SubTitle>
				<CallToAction type="main">
					Github{' '}
					<GitHub size={24} color="#222"/>
				</CallToAction>
			</Section>
			<Section align="rowAlt">
				<SubTitle css={{ paddingLeft: '20px' }}>Perguntas e respostas sobre a Cloud</SubTitle>
				<Informations />
			</Section>
			<Section align="center">
				<Title size="md">Nosso Time</Title>
				<SubTitle size="md">Professores orientadores e alunos</SubTitle>
				<Team />
			</Section>
		</Container>
	);
}
