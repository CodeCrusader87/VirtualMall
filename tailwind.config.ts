import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'vm-black-100': '#0B0F0E',
				'vm-black-200': '#1D2322',
				'vm-black-300': '#313736',
				'vm-green-100': '#1E4C2F',
				'vm-green-200': '#257E34',
				'vm-green-300': '#1D9E34',
				'vm-grey-100': '#818B9C',
				'vm-grey-200': '#9BA6B9',
				'vm-grey-300': '#BCC5D4',
				'vm-grey-400': '#F1F1F1',
				'vm-grey-500': '#F6F6F6',
				'vm-grey-600': '#F9F9F9',
				'vm-grey-700': '#E4E9EE',
				'vm-grey-800': '#F0F3F6',
				'vm-grey-900': '#F8F9FC',
				'vm-orange-100': '#3D5BF6',
				'vm-orange-200': '#AAAFBE',
				'vm-orange-300': '#D4D7DF',
				'vm-red-100': '#E04124',
				'vm-red-200': '#EF907F',
				'vm-red-300': '#F9BCB1',
				'vm-white-100': '#FFFFFF',
			},
		},
	},
	plugins: [],
};
export default config;
