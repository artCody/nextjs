const ProfileIcon = ({ color = "#7A7E81" }) => {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.00778 16.6669C4.14624 13.7111 6.11799 11.2346 8.81166 10.3489C7.72069 9.6345 7 8.40141 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7C15 8.40141 14.2793 9.6345 13.1883 10.3489C15.882 11.2346 17.8538 13.7111 17.9922 16.6669C19.2477 15.1198 20 13.1477 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 13.1477 2.75231 15.1198 4.00778 16.6669ZM11.2663 21.9968C11.1778 21.9989 11.089 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 15.4142 19.3999 19.2211 15.6477 20.9728C14.3423 21.7222 12.7374 22 11.5 22C11.4243 22 11.3464 21.999 11.2663 21.9968ZM14.725 19.1954C15.5233 18.7154 16 18.0654 16 17C16 14.2386 13.7614 12 11 12C8.23858 12 6 14.2386 6 17C6 17.8661 6.49236 18.5648 7.69357 19.1543C8.82905 19.7115 10.2507 19.9625 11.2684 19.9961C12.4985 19.96 13.6666 19.6772 14.725 19.1954ZM11 9C12.1046 9 13 8.10457 13 7C13 5.89543 12.1046 5 11 5C9.89543 5 9 5.89543 9 7C9 8.10457 9.89543 9 11 9Z"
				fill={color}
			/>
		</svg>
	);
};

export default ProfileIcon;
