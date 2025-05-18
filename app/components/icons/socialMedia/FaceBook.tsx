const FaceBook = ({
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
      fillRule="evenodd"
      fill="#1877f2"
      d="m12 0c6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12z"
    />
    <path
      fill="#ffffff"
      d="m16.7 15.5l0.5-3.5h-3.3v-2.3c0-0.9 0.4-1.8 1.9-1.8h1.5v-3c0 0-1.3-0.2-2.6-0.2-2.8 0-4.6 1.6-4.6 4.7v2.6h-3v3.5h3v8.4q0.9 0.1 1.9 0.1 1 0 1.9-0.1v-8.4z"
    />
  </svg>
);

export default FaceBook;
