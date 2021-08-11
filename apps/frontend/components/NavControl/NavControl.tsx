import * as React from "react";
import styled from "styled-components";
import NavControlItem from "./components/NavControlItem";

import ReloadIcon from "components/icons/ReloadIcon";
// import FavoriteIcon from "components/icons/FavoriteIcon";
import OrdersIcon from "components/icons/OrdersIcon";
import ProfileIcon from "components/icons/ProfileIcon";
import BasketIcon from "components/icons/BasketIcon";

const StyledNavControl = styled.ul`
	display: flex;
	li:last-child {
		margin-right: 0;
	}
`;

const NavControl: React.FC = () => {
	return (
		<StyledNavControl>
			<NavControlItem name="Повторить" icon={<ReloadIcon />} />
			<NavControlItem name="Избранное" />
			<NavControlItem name="Заказы" icon={<OrdersIcon />} />
			<NavControlItem name="Корзина" icon={<BasketIcon />} />
			<NavControlItem name="Профиль" icon={<ProfileIcon />} />
		</StyledNavControl>
	);
};

export default NavControl;
