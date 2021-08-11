import * as React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul``;
const StyledItem = styled.li`
	color: ${(props) => props.theme.colors.grayDark};
	font-size: 16px;
	line-height: 150%;
	text-indent: 1px;
	margin-bottom: 6px;
`;

const FooterList: React.FC = () => {
	return (
		<StyledList>
			<StyledItem>
				<Link href="/about">
					<a>О нас</a>
				</Link>
			</StyledItem>
			<StyledItem>
				<Link href="/contacts">
					<a>Контакты</a>
				</Link>
			</StyledItem>
			<StyledItem>
				<Link href="/">
					<a>Вакансии</a>
				</Link>
			</StyledItem>
			<StyledItem>
				<Link href="/">
					<a>Документы</a>
				</Link>
			</StyledItem>
			<StyledItem>
				<Link href="/">
					<a>Стать партнером</a>
				</Link>
			</StyledItem>
		</StyledList>
	);
};

export default FooterList;
