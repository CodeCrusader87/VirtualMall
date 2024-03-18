import React from 'react';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { CartIcon } from '@/assets/icons';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Primary = {
	args: {
		variant: 'primary',
		text: 'Button',
	},
};

export const Secondary = {
	args: {
		variant: 'secondary',
		text: 'Button',
	},
};

export const WithIcon = {
	args: {
		icon: CartIcon,
		variant: 'secondary',
		text: 'icon',
	},
};
