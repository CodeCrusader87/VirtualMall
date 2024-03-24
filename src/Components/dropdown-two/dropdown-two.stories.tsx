import { Meta, StoryObj } from '@storybook/react';
import DropdownTwo from './dropdown-two';
import { useState } from 'react';

const meta: Meta<typeof DropdownTwo> = {
	component: DropdownTwo,
	title: 'Components / Dropdown Two',
};

export default meta;
type Story = StoryObj<typeof DropdownTwo>;

const DropdownTwoWithState = (
	variant: 'classic' | 'borderless' = 'classic',
) => {
	const people = [
		{ label: 'Wade Cooper' },
		{ label: 'Arlene Mccoy' },
		{ label: 'Devon Webb' },
		{ label: 'Tom Cook' },
		{ label: 'Tanya Fox' },
		{ label: 'Hellen Schmidt' },
		{ label: 'Hellenaaaaaaaaaaaaaaaa Schmidt' },
	];

	const [selectedPerson, setSelectedPerson] = useState(people[0]);

	return (
		<DropdownTwo
			selectedOption={selectedPerson}
			setSelectedOption={setSelectedPerson}
			options={people}
			variant={variant}
		/>
	);
};

export const Standard: Story = {
	render: () => DropdownTwoWithState(),
};

export const Borderless: Story = {
	render: () => DropdownTwoWithState('borderless'),
};
