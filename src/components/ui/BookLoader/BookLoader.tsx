export const BookLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex w-[150px] h-fit items-center justify-end">
        <svg
          className="w-full h-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.14)]"
          viewBox="0 0 126 75"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="2.5"
            width="121"
            height="70"
            rx="7.5"
            stroke="#000"
            strokeWidth="5"
          />
          <line x1="63.5" x2="63.5" y2="75" stroke="#000" strokeWidth="5" />
          <path
            d="M25 20H50"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M101 20H76"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M16 30L50 30"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M110 30L76 30"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className="w-1/2 h-auto absolute animate-[paging_0.2s_linear_infinite] origin-left"
          viewBox="0 0 65 75"
          fill="#ffffff74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 20H15"
            stroke="#001"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M49 30L15 30"
            stroke="#001"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
            stroke="#001"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
};
