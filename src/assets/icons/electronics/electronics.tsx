import * as React from 'react';
import { SVGProps } from 'react';

const Electronics = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 53 52"
		{...props}
	>
		<g clipPath="url(#a)">
			<rect width={32} height={44} x={10.5} y={4} fill="#1E4C2F" rx={6} />
			<circle cx={26.5} cy={41} r={3} fill="#fff" />
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M.5 0h52v52H.5z" />
			</clipPath>
		</defs>
	</svg>
);
export default Electronics;
