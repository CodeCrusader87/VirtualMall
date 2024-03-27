import * as React from 'react';
import { SVGProps } from 'react';
const Fashion = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 52 52"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="#1E4C2F"
				d="M49.847 12.452 39.812 6.723A1.625 1.625 0 0 0 39 6.5h-6.5a1.625 1.625 0 0 0-1.625 1.625 4.875 4.875 0 1 1-9.75 0A1.625 1.625 0 0 0 19.5 6.5H13a1.625 1.625 0 0 0-.813.223L2.153 12.452a3.23 3.23 0 0 0-1.3 4.265l3.738 7.495A3.25 3.25 0 0 0 7.495 26h3.88v16.25a3.25 3.25 0 0 0 3.25 3.25h22.75a3.25 3.25 0 0 0 3.25-3.25V26h3.88a3.25 3.25 0 0 0 2.904-1.788l3.738-7.495a3.23 3.23 0 0 0-1.3-4.265ZM7.495 22.75l-3.737-7.475 7.617-4.347V22.75h-3.88Zm37.01 0h-3.88V10.928l7.617 4.347-3.737 7.475Z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h52v52H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default Fashion;
