import React from 'react';
import {a11yHiddenSvgProps} from 'utils/svg';

export const Like: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        {...a11yHiddenSvgProps}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.509 15.085C13.448 12.165 16 9.046 16 5.67c0-4.787-5.29-6.364-8-3.374C5.29-.695 0 .882 0 5.67c0 3.377 2.552 6.497 7.491 9.416a1 1 0 0 0 1.018 0Zm.402-10.56C10.188 1.706 14 2.445 14 5.67c0 2.413-1.951 4.893-6 7.387-4.049-2.494-6-4.974-6-7.387 0-3.225 3.812-3.964 5.089-1.144a1 1 0 0 0 1.822 0Z"
        />
    </svg>
);
