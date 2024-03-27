import React from 'react';
import { CategoryCardOne } from './category-card-one';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionFigure } from '@/assets/icons';

export default {
	title: 'Components/Category Card One',
	component: CategoryCardOne,
} as Meta;

type Story = StoryObj<typeof CategoryCardOne>;

export const Example: Story = {
	args: {
		icon: ActionFigure,
		title: 'Action Figure',
		nop: 41,
	},
};
