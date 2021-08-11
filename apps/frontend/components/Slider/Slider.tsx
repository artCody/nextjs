import * as React from "react";
import styled from "styled-components";
import { default as SlickSlider } from "react-slick";
import Image from "next/image";

const StyledItem = styled.li`
	display: flex;
	align-items: center;
	margin-right: 31px;
	justify-content: center;
	position: relative;
`;

const StyledTitle = styled.span`
	display: block;
	position: absolute;
	left: 0;
	top: 0;
`;

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface Props {
	data: Post[];
	width?: number;
	height?: number;
	settings: any;
}

const Slider: React.FC<Props> = ({
	data,
	width = 1280,
	height = 480,
	settings,
}) => {
	return (
		<SlickSlider {...settings}>
			{data.map((item: Post) => {
				return (
					<StyledItem key={item.id}>
						<Image
							width={width}
							height={height}
							src={`https://via.placeholder.com/${width}x${height}`}
							layout="responsive"
						/>
						<StyledTitle>{item.title}</StyledTitle>
					</StyledItem>
				);
			})}
		</SlickSlider>
	);
};

export default Slider;
