import { FormEvent } from 'react';
import DropdownOne, { DropdownOneProps } from '../dropdown-one/dropdown-one';
import { Search } from '@/assets/icons';

export interface SearchBarProps {
	withDropdown?: boolean;
	dropdownButtonText?: string;
	dropdownOptions?: DropdownOneProps['options'];
	placeHolder?: string;
}

export default function SearchBar({
	withDropdown = false,
	dropdownButtonText = '',
	dropdownOptions = [],
	placeHolder,
}: SearchBarProps) {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		window.alert('onSubmit worked');
	};

	return (
		<form onSubmit={onSubmit} className="w-full flex bg-red-200">
			{withDropdown && (
				<DropdownOne
					buttonText={dropdownButtonText}
					options={dropdownOptions}
					variant="borderless"
				/>
			)}
			<input
				type="text"
				placeholder={placeHolder}
				className=" w-full bg-transparent placeholder:text-vm-grey-100"
			/>
			<Search className="w-6 h-6" />
		</form>
	);
}
