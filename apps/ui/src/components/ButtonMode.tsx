import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	cursor: pointer;
	position: fixed;
	right: 20px;
	bottom: 20px;
	width: 50px;
	height: 50px;
	border: none;
	background: none;
	border-radius: 50%;
	box-shadow: 0px 4px 8px rgba(0,0,0,0.12);
`;

interface Props {
	setMode: any;
	mode?: boolean;
}


const ButtonMode: React.FC<Props> = ({setMode, mode = false}) => <StyledButton onClick={()=>setMode(!mode)}>Mode</StyledButton>;

export default ButtonMode;
