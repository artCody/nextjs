import * as React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Container, ButtonCatalog, Finder } from "ui/src";
import LocationSelector from "components/LocationSelector";
import LanguageSelector from "components/LanguageSelector";
import MenuButtonIcon from "components/icons/MenuButtonIcon";
import SearchIcon from "components/icons/SearchIcon";
import NavControl from "components/NavControl";
import NavList from "components/NavList";
import NavListCategory from "components/NavListCategory";
import useLocal from "hooks/useLocal";

const StyledHeader = styled.div`
	margin-top: 33px;
	margin-bottom: 50px;
`;

const StyledLogo = styled.div`
	max-width: 104px;
	height: 70px;
`;

const StyledTopHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledMiddleHeader = styled.div`
	display: flex;
	padding: 17px 0;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const StyledList = styled.ul`
	display: flex;
`;
const StyledItem = styled.li`
	color: ${(props) => props.theme.colors.grayLight};
	font-size: 14px;
`;

const StyledFinder = styled.div`
	display: flex;
	margin: 0 20px;
	width: 48.71%;
`;

const StyledFooterHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Header: React.FC = () => {
	const { locale } = useLocal();
	const { nav } = locale;

	return (
		<StyledHeader>
			<Container>
				<StyledTopHeader>
					<LocationSelector title={"Ереван, ул. Туманяна, 19 "} />
					<StyledList>
						<StyledItem>Стать партнером</StyledItem>
						<StyledItem>
							<LanguageSelector />
						</StyledItem>
					</StyledList>
				</StyledTopHeader>
				<StyledMiddleHeader>
					<StyledLogo>{/* <Image src={Logo} /> */}</StyledLogo>
					<StyledFinder>
						<ButtonCatalog title={"Каталог"} icon={<MenuButtonIcon />} />
						<Finder icon={<SearchIcon />} />
					</StyledFinder>
					<NavControl />
				</StyledMiddleHeader>
				<StyledFooterHeader>
					<NavList nav={nav} />
					<NavListCategory />
				</StyledFooterHeader>
			</Container>
		</StyledHeader>
	);
};

export default Header;
