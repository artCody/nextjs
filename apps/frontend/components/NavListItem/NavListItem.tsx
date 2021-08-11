import * as React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
	display: flex;
	align-items: center;
	margin-right: 31px;
	justify-content: center;
`;

const StyledIcon = styled.div`
	display: flex;
	height: 22px;
	align-items: center;
	margin-right: 15px;
`;

const StyledText = styled.div`
	font-size: 16px;
	color: ${(props) => props.theme.colors.navColor};
`;

interface Props {
	name: String;
	icon?: React.ReactNode;
}

const NavList: React.FC<Props> = ({ name, icon }) => {
	return (
		<StyledItem>
			{icon && <StyledIcon>{icon}</StyledIcon>}
			<StyledText>{name}</StyledText>
		</StyledItem>
	);
};

export default NavList;
