import { Container } from "ui/src";
import Layout from "components/Layout";
import Slider from "components/Slider";
import styled from "styled-components";

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface Props {
	lang: string;
	posts: Post[];
}

const settings2 = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	autoplay: true,
	centerPadding: "20px",
	className: "products-slider",
};
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	className: "main-slider",
};

const StyledSection = styled.div``;

export default function Main({ lang, posts }: Props) {
	return (
		<Layout>
			<Container>
				<StyledSection>
					<Slider data={posts} width={1280} height={440} settings={settings} />
				</StyledSection>
				<StyledSection>
					<Slider data={posts} width={290} height={522} settings={settings2} />
				</StyledSection>
			</Container>
		</Layout>
	);
}

Main.getInitialProps = async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_start=1&_limit=5"
	);
	const posts = await response.json();
	return {
		posts,
	};
};
