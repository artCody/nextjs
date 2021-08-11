import * as React from "react";
import styled from "styled-components";
import NavListItem from "components/NavListItem";

const StyledList = styled.ul`
	display: flex;
	li:last-child {
		margin-right: 0;
	}
`;

const NavList: React.FC = () => {
	return (
		<StyledList>
			<NavListItem name="Электроника" />
			<NavListItem name="Одежда" />
			<NavListItem name="Красота и здоровье" />
			<NavListItem name="Детские товары" />
			<NavListItem name="Продукты питания" />
		</StyledList>
	);
};

export default NavList;
