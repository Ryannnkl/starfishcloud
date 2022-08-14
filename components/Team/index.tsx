import {
	TeamContainer,
	TeamItem,
	AvatarImage,
	Label,
	TeamContent,
	ContactButton,
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
	TooltipArrow,
} from './styles';

export default function Team() {
	return (
		<TeamContainer>
			<TeamItem>
				<AvatarImage>RF</AvatarImage>
				<Label>Ryann Ferreira</Label>
				<Label color="secondary">@Ryannnkl</Label>
				<TeamContent>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere non cupiditate minima
					debitis nostrum itaque, corporis voluptatum consequuntur pariatur culpa!
				</TeamContent>
				<TooltipProvider delayDuration={100}>
					<Tooltip>
						<TooltipTrigger asChild>
							<ContactButton>Contact</ContactButton>
						</TooltipTrigger>
						<TooltipContent>
							<TooltipArrow />
							ryannn@gmail.com
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</TeamItem>
			<TeamItem>
				<AvatarImage>RF</AvatarImage>
				<Label>Ryann Ferreira</Label>
				<Label color="secondary">@Ryannnkl</Label>
				<TeamContent>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere non cupiditate minima
					debitis nostrum itaque.
				</TeamContent>
				<ContactButton>Contact</ContactButton>
			</TeamItem>
			<TeamItem>
				<AvatarImage>RF</AvatarImage>
				<Label>Ryann Ferreira</Label>
				<Label color="secondary">@Ryannnkl</Label>
				<TeamContent>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere non cupiditate minima
					debitis nostrum itaque, corporis voluptatum consequuntur pariatur culpa! Nobis sint
					accusantium qui explicabo tenetur quaerat perspiciatis magni natus.
				</TeamContent>
				<ContactButton>Contact</ContactButton>
			</TeamItem>
			<TeamItem>
				<AvatarImage>RF</AvatarImage>
				<Label>Ryann Ferreira</Label>
				<Label color="secondary">@Ryannnkl</Label>
				<TeamContent>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere non cupiditate minima
					debitis nostrum itaque, corporis voluptatum consequuntur pariatur culpa!
				</TeamContent>
				<ContactButton>Contact</ContactButton>
			</TeamItem>
		</TeamContainer>
	);
}
