import { ArrowDownTriangle } from '@/assets/icons';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { ElementType, Fragment, ReactNode } from 'react';

export interface DropdownOneProps {
	buttonText: string;
	options: Array<DropdownOneOption>;
}

interface DropdownOneOption {
	text: string;
	action?: () => void;
	href?: string;
	icon?: React.JSX.ElementType;
}

export default function DropdownOne({ buttonText, options }: DropdownOneProps) {
	return (
		<Menu as="div" className="relative w-fit text-left">
			<Menu.Button className="flex w-fit justify-between items-center gap-2 rounded-lg px-4 py-2 vm-text-p3-medium text-vm-black-100 border border-vm-grey-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
				{buttonText}
				<ArrowDownTriangle className="w-4 h-4" />
			</Menu.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute left-0 mt-2 min-w-full origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
					{options.map((option) => {
						const Component = option.href ? Link : 'button';
						return (
							<Menu.Item key={option.text} as="div" className="p-1">
								{({ active }) => {
									return (
										<Component
											href={option.href ?? ''}
											onClick={option.action}
											className={`${
												active ? ' bg-vm-green-200 text-white' : 'text-gray-900'
											}  flex w-full items-center rounded-md px-2 py-2 vm-text-p3-regular duration-200 gap-1`}
										>
											{option.icon && <option.icon className="w-5 h-5" />}
											{option.text}
										</Component>
									);
								}}
							</Menu.Item>
						);
					})}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
