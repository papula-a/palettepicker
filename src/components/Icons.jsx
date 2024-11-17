const Icons = {
  spinner: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  leftShape: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 800"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fill="#C084FC"
        d="M0,0 C60,200 40,600 0,800 L100,800 C160,600 140,200 100,0 Z"
      />
    </svg>
  ),
  rightShape: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 800"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fill="#F9A8D4"
        d="M100,0 C140,200 160,600 100,800 L200,800 C160,600 140,200 200,0 Z"
      />
      <path
        fill="#F472B6"
        d="M150,0 C130,200 170,600 150,800 L200,800 L200,0 Z"
      />
    </svg>
  ),
};

export default Icons;
