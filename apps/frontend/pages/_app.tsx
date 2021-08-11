import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { useRouter } from "next/router";
import { Theme, ButtonMode } from "ui/src";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({ Component, pageProps }: AppProps) {
	const [mode, setMode] = useState(false);
	const router = useRouter();
	const { locale }: any = router;
	return (
		<Theme mode={mode}>
			<ButtonMode setMode={setMode} mode={mode} />
			<Component {...pageProps} lang={locale} />
		</Theme>
	);
}
export default App;
