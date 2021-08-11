import * as React from "react";
import styled from "styled-components";

import Header from "components/Header";
import Footer from "components/Footer";

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const StyledLayout2Column = styled.div`
	display: flex;
`;

const StyledMain = styled.div`
	flex: 1 0 auto;
`;

interface Props {
	children: React.ReactNode;
}

const Layout2Column: React.FC<Props> = ({ children }) => {
	return (
		<StyledLayout>
			<Header />
			<StyledLayout2Column>
				<div>Sidebar</div>
				<StyledMain>{children}</StyledMain>
			</StyledLayout2Column>
			<Footer />
		</StyledLayout>
	);
};

export default Layout2Column;
