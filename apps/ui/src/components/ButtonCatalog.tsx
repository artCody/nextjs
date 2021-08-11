import * as React from "react";
import styled from "styled-components";
import useLogger from "../hooks/useLogger";

const StyledButtonCatalog = styled.div`
	cursor: pointer;
	width: 125px;
	min-width: 125px;
	height: 40px;
	overflow: hidden;
	border-radius: 4px;
	position: relative;
`;

const StyledButtonContainer = styled.div`
	width: 125px;
	height: 40px;
	margin: 0 0 0 -6px;
	transform: skew(-20deg);
	background: ${(props) => props.theme.colors.primary};
	overflow: hidden;
	position: relative;
	border-radius: 0 4px 4px 0;
	padding-left: 6px;
`;

const StyledButtonContent = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 40px;
	width: 125px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledButtonText = styled.div``;

const StyledButtonIcon = styled.div`
	margin-left: 8px;
`;

interface Props {
	title?: string;
	icon?: React.ReactNode;
}

const ButtonCatalog: React.FC<Props> = ({
	children,
	title = "Catalog",
	icon,
}) => {
	useLogger({ value: "render button" });
	return (
		<StyledButtonCatalog>
			<StyledButtonContainer></StyledButtonContainer>
			<StyledButtonContent>
				<StyledButtonText>{title}</StyledButtonText>
				<StyledButtonIcon>{icon}</StyledButtonIcon>
			</StyledButtonContent>
		</StyledButtonCatalog>
	);
};

export default ButtonCatalog;
