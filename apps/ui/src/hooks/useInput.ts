import { useState } from "react";

interface Props {
	value?: any;
	placeholder?: string;
}

export default function useLogger({
	value: initialValue = "",
	placeholder,
}: Props) {
	const [value, setValue] = useState(initialValue);
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	const clear = () => setValue("");
	return { value, placeholder, onChange, clear };
}
