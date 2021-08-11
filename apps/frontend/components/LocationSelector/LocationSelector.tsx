import * as React from "react";
import styled from "styled-components";
import LocationIcon from "components/icons/LocationIcon";
import ArrowDownIcon from "components/icons/ArrowDownIcon";

const StyledLocationSelector = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 14px;
	position: relative;
	color: ${(props) => props.theme.colors.grayDark};
`;
const StyledModal = styled.div<{ show: boolean }>`
	position: absolute;
	top: 20px;
	left: 0;
	border-radius: 10px;
	padding: 40px 50px;
	width: 793px;
	background-color: #fff;
	z-index: 1000;
	transition: all 0.2s linear;
	opacity: ${(props) => (props.show ? "1" : "0")};
	visibility: ${(props) => (props.show ? "visible" : "hidden")};
	min-height: ${(props) => (props.show ? "645px" : "0")};
`;

const StyledAddress = styled.div`
	margin: 0 11px;
`;

const StyledZona = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 1;
	background: rgba(14, 16, 15, 0.7);
`;

const StyledButton = styled.div``;

interface Props {
	title: string;
	show?: boolean;
}

const LocationSelector: React.FC<Props> = ({ title }) => {
	const [show, setShow] = React.useState(false);
	return (
		<>
			<StyledLocationSelector>
				<LocationIcon />
				<StyledAddress>{title}</StyledAddress>
				<StyledButton onClick={() => setShow(!show)}>
					<ArrowDownIcon />
				</StyledButton>
				<StyledModal show={show}>Here</StyledModal>
			</StyledLocationSelector>
			{show && <StyledZona onClick={() => setShow(!show)}></StyledZona>}
		</>
	);
};

export default LocationSelector;
