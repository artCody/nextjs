import { useEffect } from "react";

interface Props {
	value: any;
}

export default function useLogger({ value }: Props) {
	useEffect(() => {
		console.log("useLogger", value);
	}, [value]);
}
