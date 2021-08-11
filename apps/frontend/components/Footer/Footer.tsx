import * as React from "react";
import styled from "styled-components";
import { Container } from "ui/src";

import FooterCol from "./components/FooterCol";
import FooterList from "./components/FooterList";

const StyledFooter = styled.div`
	flex: 0 0 auto;
	width: 100%;
	background-color: ${(props) => props.theme.colors.gray};
	padding: 40px 0;
`;

const StyledFooterMain = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledFooterBottom = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 20px;
	margin-top: 40px;
	color: ${(props) => props.theme.colors.blackLight};
	border-top: 1px solid ${(props) => props.theme.colors.gray};
`;

const StyledFooterItem = styled.div``;

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<Container>
				<StyledFooterMain>
					<FooterCol title={"Маркетплейс"}>
						<FooterList />
					</FooterCol>
					<FooterCol title={"Помощь покупателям"}>
						<FooterList />
					</FooterCol>
					<FooterCol title={"Присоединяйтесь к нам"}>
						<FooterList />
					</FooterCol>
					<FooterCol title={"Заказывайте с телефона"}>
						<FooterList />
					</FooterCol>
				</StyledFooterMain>
				<StyledFooterBottom>
					<StyledFooterItem>
						© 2021 ООО «Фабрика решений». Все права защищены.
					</StyledFooterItem>
					<StyledFooterItem>Пользовательское соглашение</StyledFooterItem>
				</StyledFooterBottom>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
