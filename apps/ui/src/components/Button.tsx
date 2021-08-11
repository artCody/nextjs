import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	padding: 8px 16px;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 48px;
	cursor: pointer;
	border: none;
`;

interface Props {
	title: string;
}

const Button: React.FC<Props> = ({ children, title }) => {
	return <StyledButton>{title}</StyledButton>;
};

export default Button;
