const Telegram = ({
  width,
  height,
  className,
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="g1"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0,23.822,-23.822,0,12,0)"
      >
        <stop offset="0" stop-color="#2aabee" />
        <stop offset="1" stop-color="#229ed9" />
      </linearGradient>
    </defs>

    <path
      fill-rule="evenodd"
      fill="#2AABEE"
      d="m12 0c6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12z"
    />
    <path
      fill-rule="evenodd"
      fill="#ffffff"
      d="m5.4 11.9q5.3-2.3 7-3c3.4-1.4 4.1-1.7 4.5-1.7 0.1 0 0.3 0 0.5 0.2 0.1 0.1 0.1 0.2 0.1 0.3 0.1 0.1 0.1 0.3 0.1 0.5-0.2 1.9-1 6.5-1.4 8.6-0.2 0.9-0.5 1.2-0.8 1.2-0.7 0.1-1.2-0.4-1.9-0.9-1.1-0.7-1.7-1.1-2.7-1.8-1.2-0.8-0.4-1.2 0.3-1.9 0.1-0.2 3.2-3 3.3-3.2 0-0.1 0-0.2-0.1-0.2-0.1-0.1-0.2-0.1-0.2-0.1q-0.2 0.1-5.1 3.4-0.7 0.5-1.3 0.5c-0.4 0-1.3-0.3-1.9-0.5-0.7-0.2-1.3-0.3-1.3-0.8q0.1-0.3 0.9-0.6z"
    />
  </svg>
);

export default Telegram;
