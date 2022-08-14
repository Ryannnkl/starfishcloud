import {
	Accordion,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionContent,
	ChevronIcon,
} from './styles';

export const Informations = () => {
	return (
		<Accordion type="single" defaultValue="ola-mundo" collapsible>
			<AccordionItem value="item-1" defaultChecked>
				<AccordionHeader>
					<AccordionTrigger>
						Como funciona?
						<ChevronIcon />
					</AccordionTrigger>
				</AccordionHeader>
				<AccordionContent>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit eligendi fugiat
					culpa tenetur iusto nisi mollitia libero distinctio, vitae hic voluptate voluptatibus sunt
					aliquam doloremque tempore. Dicta, id dolor.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="teste-2">
				<AccordionHeader>
					<AccordionTrigger>
						Quem pode usar?
						<ChevronIcon />
					</AccordionTrigger>
				</AccordionHeader>
				<AccordionContent>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit eligendi fugiat
					culpa tenetur iusto nisi mollitia libero distinctio, vitae hic voluptate voluptatibus sunt
					aliquam doloremque tempore. Dicta, id dolor.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="teste3">
				<AccordionHeader>
					<AccordionTrigger>
						É gratuito?
						<ChevronIcon />
					</AccordionTrigger>
				</AccordionHeader>
				<AccordionContent>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit eligendi fugiat
					culpa tenetur iusto nisi mollitia libero distinctio, vitae hic voluptate voluptatibus sunt
					aliquam doloremque tempore. Dicta, id dolor.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
