import * as React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const StyledFinder = styled.div`
	cursor: pointer;
	width: 485px;
	height: 40px;
	border-radius: 4px;
	position: relative;
`;

const StyledContainer = styled.div`
	height: 40px;
	transform: skew(-20deg);
	border: 2px solid ${(props) => props.theme.colors.primary};
	overflow: hidden;
	position: relative;
	border-radius: 4px;
	margin-right: 7px;
`;

const StyledInput = styled.input`
	outline: none;
	width: 403px;
	font-size: 16px;
	height: 100%;
	border: 0;
	padding: 0;
	margin: 0;
	padding: 0 12px;
	background: none;
	&:focus {
		outline: none;
	}
`;

const StyledContent = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 40px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledContentInner = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
`;

const StyledSearchContainer = styled.div`
	cursor: pointer;
	width: 82px;
	height: 40px;
	position: relative;
	border-radius: 4px;
`;

const StyledSearchButton = styled.div`
	height: 40px;
	transform: skew(-20deg);
	background-color: ${(props) => props.theme.colors.primary};
	overflow: hidden;
	position: relative;
	border-radius: 4px;
`;

const StyledSearchButtonContent = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledWrapper = styled.div``;

interface Props {
	title?: string;
	icon?: React.ReactNode;
}

const Finder: React.FC<Props> = ({ icon }) => {
	const Input = useInput({ placeholder: "Искать товары" });

	React.useEffect(() => {
		console.log("INPUT", Input.value);
	}, [Input.value]);

	return (
		// <StyledWrapper>
		<StyledFinder>
			<StyledContainer></StyledContainer>
			<StyledContent>
				<StyledContentInner>
					<StyledInput {...Input} />
					<StyledSearchContainer>
						<StyledSearchButton></StyledSearchButton>
						<StyledSearchButtonContent onClick={Input.clear}>
							{icon}
						</StyledSearchButtonContent>
					</StyledSearchContainer>
				</StyledContentInner>
			</StyledContent>
		</StyledFinder>
		// </StyledWrapper>
	);
};

export default Finder;
