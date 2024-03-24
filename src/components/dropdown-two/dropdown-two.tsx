import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ArrowDownTriangle } from '@/assets/icons';

interface DropdownTwoOption {
	label: string;
	[key: string]: any;
}

export interface DropdownTwoProps {
	options: Array<DropdownTwoOption>;
	selectedOption: DropdownTwoOption;
	setSelectedOption: (value: DropdownTwoOption) => void;
	variant?: 'classic' | 'borderless';
}

export default function DropdownTwo({
	options,
	selectedOption,
	setSelectedOption,
	variant = 'classic',
}: DropdownTwoProps) {
	return (
		<Listbox value={selectedOption} by="label" onChange={setSelectedOption}>
			<div className="relative max-w-24 text-left">
				<Listbox.Button
					className={`flex w-full items-center gap-2 rounded-lg vm-text-p3-medium text-vm-black-100 ${variant === 'classic' && 'border border-vm-grey-700 px-3 py-3'} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
				>
					<span className="block truncate">{selectedOption.label}</span>
					<ArrowDownTriangle className="w-4 h-4" />
				</Listbox.Button>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Listbox.Options className="absolute left-0 mt-2 p-1 min-w-full origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
						{options.map((option) => (
							<Listbox.Option
								key={option.label}
								className={({ active }) =>
									`flex w-full items-center cursor-pointer rounded-md px-2 py-1 vm-text-p3-regular duration-200 gap-1 ${
										active ? ' bg-vm-green-200 text-white' : 'text-gray-900'
									}`
								}
								value={option}
							>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? 'vm-text-p3-medium' : 'vm-text-p3-regular'
											}`}
										>
											{option.label}
										</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}
