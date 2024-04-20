const PathIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={68}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        stroke={props.color || "#79D9A6"}
        strokeWidth={3}
        d="M6 53.926c1.773-8.679 14.458-23.031 34-24.535 19.5-1.5 28.594-9.74 32-29"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={76.947}
        height={67.097}
        x={0.53}
        y={0.13}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={9} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_108" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5_108"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default PathIcon;
