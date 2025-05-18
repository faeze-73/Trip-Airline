const YouTube = ({
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
    <path
      fill="#ff0000"
      d="m23.5 6.2c-0.3-1-1.1-1.8-2.1-2.1-1.9-0.5-9.4-0.5-9.4-0.5 0 0-7.5 0-9.4 0.5-1 0.3-1.8 1.1-2.1 2.1-0.5 1.9-0.5 5.8-0.5 5.8 0 0 0 3.9 0.5 5.8 0.3 1 1.1 1.8 2.1 2.1 1.9 0.5 9.4 0.5 9.4 0.5 0 0 7.5 0 9.4-0.5 1-0.3 1.8-1.1 2.1-2.1 0.5-1.9 0.5-5.8 0.5-5.8 0 0 0-3.9-0.5-5.8z"
    />
    <path fill="#ffffff" d="m9.6 15.6l6.3-3.6-6.3-3.6z" />
  </svg>
);

export default YouTube;
