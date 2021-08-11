import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: ${(props) => props.theme.width.xl}px;
	margin: 0 auto;
	padding: 0 20px;
`;

interface Props {
	children: any;
}

const Container: React.FC<Props> = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
