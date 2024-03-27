import React from 'react';
import { CategoryCardThree } from './category-card-three';
import type { Meta, StoryObj } from '@storybook/react';
import { Books } from '@/assets/icons';

export default {
	title: 'Components/Category Card Three',
	component: CategoryCardThree,
} as Meta;

type Story = StoryObj<typeof CategoryCardThree>;

export const Example: Story = {
	args: {
		icon: Books,
		title: 'Book',
		nop: 128,
	},
};
