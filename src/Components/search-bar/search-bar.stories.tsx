import { Meta, StoryObj } from '@storybook/react';
import SearchBar from './search-bar';
import { useState, FormEvent } from 'react';

const meta: Meta<typeof SearchBar> = {
	component: SearchBar,
	title: 'Components / SearchBar',
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

const SearchBarWithoutDropdown = () => {
	const onSearch = (e: FormEvent<HTMLFormElement>, value: string) => {
		window.alert(`Successfully searched ${value}!`);
		e.preventDefault();
	};

	return <SearchBar onSearch={onSearch} placeHolder="Search with category" />;
};

export const Standart: Story = {
	render: () => <SearchBarWithoutDropdown />,
};

const SearchBarWithDropdown = () => {
	const categories = [
		{ label: 'Bakery' },
		{ label: 'Groceries' },
		{ label: 'Market' },
		{ label: 'Clothing' },
		{ label: 'Electronic' },
		{ label: 'Restaurant' },
	];

	const [categoryFilter, setCategoryFilter] = useState(categories[0]);

	const onSearch = (e: FormEvent<HTMLFormElement>, value: string) => {
		window.alert(
			`Successfully searched ${value} within ${categoryFilter.label} category!`,
		);
		e.preventDefault();
	};

	return (
		<SearchBar
			onSearch={onSearch}
			withDropdown
			selectedDropdownOption={categoryFilter}
			setSelectedDropdownOption={setCategoryFilter}
			dropdownOptions={categories}
			placeHolder="Search with category"
		/>
	);
};

export const WithDropdown: Story = {
	render: () => <SearchBarWithDropdown />,
};
