const UserIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13s1.5 2 4 2 4-2 4-2m1-4.76c-.395.485-.935.76-1.5.76s-1.09-.275-1.5-.76m-4 0c-.395.485-.935.76-1.5.76S6.41 8.725 6 8.24M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
    />
  </svg>
);
export default UserIcon;
