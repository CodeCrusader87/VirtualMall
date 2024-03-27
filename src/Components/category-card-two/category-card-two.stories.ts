import React from 'react';
import { CategoryCardTwo } from './category-card-two';
import type { Meta, StoryObj } from '@storybook/react';
import { Electronics } from '@/assets/icons';

export default {
	title: 'Components/Category Card Two',
	component: CategoryCardTwo,
} as Meta;

type Story = StoryObj<typeof CategoryCardTwo>;

export const Example: Story = {
	args: {
		icon: Electronics,
		title: 'Electronics',
		nop: 89,
	},
};
