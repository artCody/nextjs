import * as React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.fontColor};
	transition: all 0.5s linear;
	height: 100%;
`;

const StyledMain = styled.div`
	flex: 1 0 auto;
`;

interface Props {
	children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<StyledLayout>
			<Header />
			<StyledMain>{children}</StyledMain>
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
