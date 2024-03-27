import * as React from 'react';
import { SVGProps } from 'react';
const Book = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 52 52"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="#1E4C2F"
				d="M43.875 6.5V39a1.625 1.625 0 0 1-1.625 1.625H14.625a3.25 3.25 0 0 0-3.25 3.25H39a1.625 1.625 0 1 1 0 3.25H9.75A1.625 1.625 0 0 1 8.125 45.5V11.375a6.52 6.52 0 0 1 6.5-6.5H42.25A1.625 1.625 0 0 1 43.875 6.5Z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h52v52H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default Book;
