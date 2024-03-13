import React from 'react';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

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
 args:{
    variant: 'secondary',
    text: 'Button',
 }
};
