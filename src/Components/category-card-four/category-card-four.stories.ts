import React from 'react';
import { CategoryCardFour } from './category-card-four';
import type { Meta, StoryObj } from '@storybook/react';
import { Games } from '@/assets/icons';

export default {
	title: 'Components/Category Card Four',
	component: CategoryCardFour,
} as Meta;

type Story = StoryObj<typeof CategoryCardFour>;

export const Example: Story = {
	args: {
		icon: Games,
		title: 'Gaming',
		nop: 82,
	},
};
