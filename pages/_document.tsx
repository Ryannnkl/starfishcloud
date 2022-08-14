import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default function MyDocument() {
	return (
		<Html lang="en">
			<Head>
				<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
