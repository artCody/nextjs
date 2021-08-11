import * as React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 19px;
`;

const StyledIcon = styled.div`
	display: flex;
	height: 22px;
	align-items: center;
`;

const StyledText = styled.div`
	margin-top: 7px;
	font-size: 12px;
	color: ${(props) => props.theme.colors.grayDark};
`;

interface Props {
	name: String;
	icon?: React.ReactNode;
}

const NavControl: React.FC<Props> = ({ name, icon }) => {
	return (
		<StyledItem>
			<StyledIcon>{icon}</StyledIcon>
			<StyledText>{name}</StyledText>
		</StyledItem>
	);
};

export default NavControl;
