const OrdersIcon = ({ color = "#7A7E81" }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.89 1.44917L20.89 5.44917C21.2233 5.61475 21.5037 5.87 21.6998 6.18622C21.8959 6.50244 21.9999 6.86709 22 7.23917V16.7692C21.9999 17.1413 21.8959 17.5059 21.6998 17.8221C21.5037 18.1383 21.2233 18.3936 20.89 18.5592L12.89 22.5592C12.6122 22.6982 12.3058 22.7706 11.995 22.7706C11.6843 22.7706 11.3779 22.6982 11.1 22.5592L3.10005 18.5592C2.76718 18.3915 2.4878 18.134 2.29344 17.816C2.09907 17.4979 1.99745 17.1319 2.00005 16.7592V7.23917C2.00025 6.86709 2.10424 6.50244 2.30033 6.18622C2.49642 5.87 2.77684 5.61475 3.11005 5.44917L11.11 1.44917C11.3866 1.31175 11.6912 1.24023 12 1.24023C12.3089 1.24023 12.6135 1.31175 12.89 1.44917V1.44917Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.31982 6.16016L11.9998 11.0002L21.6798 6.16016"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 22.76V11"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 3.5L17 8.5"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default OrdersIcon;
