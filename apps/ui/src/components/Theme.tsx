import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme, themeDark } from "../config";

interface Props {
	children: any;
	mode? : boolean;
}


const Theme: React.FC<Props> = ({ children, mode = false }) => {
	return <ThemeProvider theme={mode ? themeDark : theme}>{children}</ThemeProvider>;
};

export default Theme;
