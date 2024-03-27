import React from 'react';
import { CategoryCardSix } from './category-card-six';
import type { Meta, StoryObj } from '@storybook/react';
import { Music } from '@/assets/icons';

export default {
	title: 'Components/Category Card Six',
	component: CategoryCardSix,
} as Meta;

type Story = StoryObj<typeof CategoryCardSix>;

export const Example: Story = {
	args: {
		icon: Music,
		title: 'Music',
		nop: 128,
	},
};
