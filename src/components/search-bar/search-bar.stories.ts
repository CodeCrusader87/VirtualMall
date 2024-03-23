import { Meta, StoryObj } from '@storybook/react';
import SearchBar from './search-bar';

const meta: Meta<typeof SearchBar> = {
	component: SearchBar,
	title: 'Components / SearchBar',
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Standart: Story = {
	args: {
		placeHolder: 'Search...',
	},
};

export const WithDropdown: Story = {
	args: {
		placeHolder: 'Search with category',
	},
};
