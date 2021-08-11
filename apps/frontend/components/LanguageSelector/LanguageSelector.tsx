import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import ArrowDownIcon from "../icons/ArrowDownIcon";

const StyledLanguageSelector = styled.div`
	display: flex;
	align-items: center;
	margin-left: 50px;
	position: relative;
`;
const StyledLanguageText = styled.div`
	margin-right: 12px;
`;

const StyledButton = styled.div``;

interface Props {
	lang?: string;
}

const StyledModal = styled.div<{ show: boolean }>`
	position: absolute;
	top: 20px;
	left: 0;
	border-radius: 10px;
	padding: 10px 10px;
	// width: 100%;
	background-color: #fff;
	z-index: 1000;
	-webkit-transition: all 0.2s linear;
	transition: all 0.2s linear;
	opacity: ${(props) => (props.show ? "1" : "0")};
	visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const StyledZona = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 1;
	background: rgba(14, 16, 15, 0.7);
`;

const StyledItem = styled.li`
	cursor: pointer;
	padding: 5px;
	&:hover {
		color: #fff;
		background-color: ${(props) => props.theme.colors.primary};
	}
`;

const StyledLink = styled.a`
	display: block;
	width: 100%:
`;

const LanguageSelector: React.FC<Props> = ({ lang = "RUS" }) => {
	const [show, setShow] = React.useState(false);
	const router = useRouter();
	const { locale, locales }: any = router;
	const otherLocales = locales.filter((lng: any) => lng !== locale);
	return (
		<>
			<StyledLanguageSelector>
				<StyledLanguageText>{locale}</StyledLanguageText>
				<StyledButton onClick={() => setShow(!show)}>
					<ArrowDownIcon />
				</StyledButton>
				<StyledModal show={show}>
					<ul>
						{otherLocales.map((lang: string) => {
							const { pathname, query, asPath } = router;
							return (
								<StyledItem key={lang} onClick={() => setShow(!show)}>
									<Link href={{ pathname, query }} as={asPath} locale={lang}>
										<StyledLink>{lang}</StyledLink>
									</Link>
								</StyledItem>
							);
						})}
					</ul>
				</StyledModal>
			</StyledLanguageSelector>
			{show && <StyledZona onClick={() => setShow(!show)}></StyledZona>}
		</>
	);
};

export default LanguageSelector;
