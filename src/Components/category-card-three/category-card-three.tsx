import Link from 'next/link';
import React from 'react';

interface CategoryCardThreeProps {
	title: string;
	nop: number;
	icon: React.JSX.ElementType;
	href?: string;
	asDiv?: boolean;
	onClickAction?: () => void;
}

const componentTypeDecider = (
	title: string,
	nop: number,
	asDiv: boolean,
	props: Record<string, any>,
) => {
	if (asDiv) return 'div';
	if (props.href) return Link;
	return 'div';
};

export const CategoryCardThree: React.FC<CategoryCardThreeProps> = ({
	asDiv = false,
	...props
}) => {
	const Component = componentTypeDecider(props.title, props.nop, asDiv, props);
	return (
		<Component href={props.href ?? ''} onClick={props.onClickAction}>
			<div className="border-2 border-gray-100 w-52 h-56 rounded-2xl m-4">
				<div className="flex items-center justify-center flex-col text-center gap-4 mt-8">
					<props.icon className="w-20 h-20" />
					<h2 className="vm-text-eh6">{props.title}</h2>
					<p className="vm-text-p1-regular text-zinc-400">
						{props.nop}k products
					</p>
				</div>
			</div>
		</Component>
	);
};

export default CategoryCardThree;
