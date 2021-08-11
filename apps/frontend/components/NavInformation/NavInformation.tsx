import * as React from "react";
import styled from "styled-components";
import NavControlItem from "./components/NavControlItem";

const StyledList = styled.ul`
	display: flex;
	li:last-child {
		margin-right: 0;
	}
`;

// const StyledContainer

const NavInformation: React.FC = () => {
	return (
		<StyledList>
			<NavControlItem name="Повторить" />
			<NavControlItem name="Избранное" />
			<NavControlItem name="Заказы" />
			<NavControlItem name="Корзина" />
			<NavControlItem name="Профиль" />
		</StyledList>
	);
};

export default NavInformation;
