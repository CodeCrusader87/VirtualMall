import type { Meta, StoryObj } from '@storybook/react';
import DropdownOne from './dropdown-one';
import { ArrowDownTriangle } from '@/assets/icons';

const meta: Meta<typeof DropdownOne> = {
	component: DropdownOne,
	title: 'Components / Dropdown One',
};

export default meta;
type Story = StoryObj<typeof DropdownOne>;

export const Example_1: Story = {
	args: {
		// Provide props here
		buttonText: 'Dropdown',
		options: [
			{ text: 'Option 1' },
			{ text: 'Option 2', icon: ArrowDownTriangle },
			{ text: 'Option 3' },
		],
	},
};
