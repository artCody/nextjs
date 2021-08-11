const ReloadIcon = ({ color = "#7A7E81" }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 0L2.93945 2.93945C1.12627 4.74821 0 7.24271 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0V2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18C5.589 18 2 14.411 2 10C2 7.79401 2.90048 5.79728 4.34961 4.34961L7 7V0H0Z"
				fill={color}
			/>
		</svg>
	);
};

export default ReloadIcon;
