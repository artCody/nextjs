import * as React from "react";
import styled from "styled-components";

// const StyledFooter = styled.div`
// 	flex: 0 0 auto;
// 	width: 100%;
// 	background-color: ${(props) => props.theme.colors.gray};
// 	padding: 40px 0;
// `;

interface Props {
	children: React.ReactNode;
	title?: String;
}

const StyledCol = styled.div`
	max-width: 25%;
`;
const StyledTitle = styled.div`
	color: ${(props) => props.theme.colors.blackLight};
	font-weight: 500;
	font-size: 16px;
	line-height: 150%;
	text-indent: 1px;
	margin-bottom: 16px;
`;
const StyledContent = styled.div``;

const FooterCol: React.FC<Props> = ({ children, title }) => {
	return (
		<StyledCol>
			<StyledTitle>{title}</StyledTitle>
			<StyledContent>{children}</StyledContent>
		</StyledCol>
	);
};

export default FooterCol;
