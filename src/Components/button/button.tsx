import Link from 'next/link';
import React from 'react';

interface ButtonProps {
	text: string;
	icon?: React.JSX.ElementType;
	variant?: 'primary' | 'secondary';
	href?: string;
	asDiv?: boolean;
	download?: string;
	onClickAction?: () => void;
}

const componentTypeDecider = (asDiv: boolean, props: Record<string, any>) => {
	if (asDiv) return 'div';
	if (props.download) return 'a';
	if (props.href) return Link;
	return 'button';
};

export const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	asDiv = false,
	...props
}) => {
	const Component = componentTypeDecider(asDiv, props);
	return (
		<Component
			href={props.href ?? ''}
			download={props.download}
			onClick={props.onClickAction}
			className={`flex gap-2 px-6 py-3.5 vm-text-h2 rounded-xl duration-200 ${
				variant === 'secondary'
					? 'border border-vm-green-100 text-vm-green-100 hover:bg-vm-green-100 hover:text-white'
					: 'bg-vm-green-100 text-white hover:drop-shadow-lg'
			}`}
		>
			{props.icon && <props.icon className="w-6 h-6" />}
			{props.text}
		</Component>
	);
};

// export default Button
