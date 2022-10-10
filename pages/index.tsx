import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { GitHub } from 'react-feather';
import CardServer from '../components/CardServer';
import { Informations } from '../components/Informations';
import NavBar from '../components/Navbar';
import Team from '../components/Team';
import { globalStyles } from '../styles/global';
import { CallToAction, Container, Section, SubTitle, Table, Title } from '../styles/home.styles';
import { dark } from '../styles/theme/dark';
import { light } from '../styles/theme/light';
import { checkServers } from '../util/servers';

export default function Home() {
	const [theme, setTheme] = useState(dark);
	useEffect(() => {
		// checkServers();
	}, []);

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
				<CallToAction type="main" href='https://github.com/StarfishCloud'>
					Github <GitHub size={24} color="#222" />
				</CallToAction>
			</Section>
			<Section align="center">
				<Title size="md">Servidores Proxmox</Title>
				<Table>
					<CardServer
						name="Recife"
						number="1"
						link="https://starfishcloud.com.br:8701/#v1:0:18:4:::::::"
					/>
					<CardServer
						name="João Pessoa"
						number="2"
						link="https://starfishcloud.com.br:8702/#v1:0:18:4:::::::"
					/>
					<CardServer
						name="Maceio"
						number="3"
						link="https://starfishcloud.com.br:8703/#v1:0:18:4:::::::"
					/>
					<CardServer
						name="Alagoas"
						number="4"
						link="https://starfishcloud.com.br:8704/#v1:0:18:4:::::::"
					/>
					<CardServer
						name="nsei"
						number="5"
						link="https://starfishcloud.com.br:8705/#v1:0:18:4:::::::"
					/>
					<CardServer
						name="Salvador"
						number="6"
						link="https://starfishcloud.com.br:8706/#v1:0:18:4:::::::"
					/>
				</Table>
			</Section>
			{/*<Section align="rowAlt">
				<SubTitle css={{ paddingLeft: '20px' }}>Perguntas e respostas sobre a Cloud</SubTitle>
				<Informations />
			</Section>
			 <Section align="center">
				<Title size="md">Nosso Time</Title>
				<SubTitle size="md">Professores orientadores e alunos</SubTitle>
				<Team />
			</Section> */}
		</Container>
	);
}
