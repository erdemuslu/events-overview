const IncreaseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={13}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#22C55E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 11.667V1m0 0L1 5m4-4 4 4"
    />
  </svg>
);
export default IncreaseIcon;
