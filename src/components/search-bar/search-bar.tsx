import { ChangeEvent, FormEvent, useState } from 'react';
import DropdownOne, { DropdownOneProps } from '../dropdown-one/dropdown-one';
import { Search } from '@/assets/icons';
import DropdownTwo, { DropdownTwoProps } from '../dropdown-two/dropdown-two';

export interface SearchBarProps {
	withDropdown?: boolean;
	selectedDropdownOption?: DropdownTwoProps['selectedOption'];
	setSelectedDropdownOption?: DropdownTwoProps['setSelectedOption'];
	dropdownOptions?: DropdownTwoProps['options'];
	placeHolder?: string;
	onSearch: (e: FormEvent<HTMLFormElement>, inputValue: string) => void;
}

export default function SearchBar({
	withDropdown = false,
	selectedDropdownOption,
	setSelectedDropdownOption,
	dropdownOptions = [],
	placeHolder,
	onSearch,
}: SearchBarProps) {
	const [inputValue, setInputValue] = useState('');

	return (
		<form
			onSubmit={(e) => onSearch(e, inputValue)}
			className="w-full flex items-center px-4 py-3 rounded-lg bg-vm-grey-800"
		>
			{withDropdown && selectedDropdownOption && setSelectedDropdownOption && (
				<div className="pr-5 mr-4 border-r border-vm-grey-700">
					<DropdownTwo
						selectedOption={selectedDropdownOption}
						setSelectedOption={setSelectedDropdownOption}
						options={dropdownOptions}
						variant="borderless"
					/>
				</div>
			)}
			<input
				type="text"
				placeholder={placeHolder}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className=" w-full bg-transparent text-vm-black-100 vm-text-p3-medium placeholder:text-vm-grey-100 placeholder:vm-text-p3-regular focus:outline-none"
			/>
			<Search className="w-6 h-6 text-vm-grey-300" />
		</form>
	);
}
