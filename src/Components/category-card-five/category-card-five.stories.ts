import React from 'react';
import { CategoryCardFive } from './category-card-five';
import type { Meta, StoryObj } from '@storybook/react';
import { Fashion } from '@/assets/icons';

export default {
	title: 'Components/Category Card Five',
	component: CategoryCardFive,
} as Meta;

type Story = StoryObj<typeof CategoryCardFive>;

export const Example: Story = {
	args: {
		icon: Fashion,
		title: 'Fashion',
		nop: 18.2,
	},
};
