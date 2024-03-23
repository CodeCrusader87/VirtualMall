import React from 'react';
import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingCart } from '@/assets/icons';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		text: 'Buy Now',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		text: 'Button',
		onClickAction: () => window.alert('Secondary variant clicked'),
	},
};

export const WithIcon: Story = {
	args: {
		icon: ShoppingCart,
		variant: 'secondary',
		text: 'Add to Cart',
	},
};
