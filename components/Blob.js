import React from 'react';

const Blob = ({ alt }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="289"
        height="250"
        viewBox="0 0 289 250"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M133.675 248.918C68.0804 248.465 0.249009 211.99 0.701101 146.583C1.2359 69.2104 57.7945 0.387639 135.389 0.923972C218.339 1.49732 288.266 65.854 287.694 148.567C287.199 220.211 205.525 249.415 133.675 248.918Z"
          fill="#2FA4FF"
        />
        <mask
          id="mask0_29_305"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="288"
          height="249"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M133.675 248.918C68.0805 248.465 0.249131 211.99 0.701223 146.583C1.23602 69.2105 57.7946 0.387654 135.389 0.923988C218.339 1.49734 288.266 65.854 287.694 148.567C287.199 220.211 205.525 249.415 133.675 248.918Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_29_305)">
          <rect
            x="-86"
            y="-99"
            width="401"
            height="391"
            fill="url(#pattern0)"
          />
          <image
            id="image0_29_305"
            width="400"
            height="400"
            x="-50"
            y={alt ? '-100' : '-80'}
            xlinkHref={alt ? '/blob-img-about.png' : '/blob-img.png'}
          />
        </g>
      </svg>
    </div>
  );
};

export default Blob;
