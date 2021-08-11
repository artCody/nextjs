import * as React from "react";
import styled from "styled-components";
import NavListItem from "../NavListItem/NavListItem";
import GiftIcon from "../icons/GiftIcon";

const StyledList = styled.ul`
	display: flex;
	li:last-child {
		margin-right: 0;
	}
`;

interface Props {
	nav: [];
}

const NavList: React.FC<Props> = ({ nav }) => {
	return (
		<StyledList>
			{nav.map((item: string, i: number) => {
				return <NavListItem key={i} name={item} icon={<GiftIcon />} />;
			})}
		</StyledList>
	);
};

export default NavList;
