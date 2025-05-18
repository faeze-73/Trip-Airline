const Linkedin = ({
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
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="m0 0h24v24h-24z" />
      </clipPath>
    </defs>
    <g id="Clip-Path" clip-path="url(#cp1)">
      <g>
        <path
          fill="#0a66c2"
          d="m0 3.2q0-1.2 0.8-1.9 0.8-0.8 2.1-0.8 1.3 0 2.1 0.8 0.8 0.7 0.8 2 0 1.1-0.8 1.8-0.8 0.8-2.1 0.8h-0.1q-1.2 0-2-0.8-0.8-0.7-0.8-1.9zm0.3 20.3v-15.5h5.1v15.5zm8 0h5.2v-8.7q0-0.8 0.2-1.2 0.3-0.8 0.9-1.4 0.7-0.5 1.7-0.5 2.6 0 2.6 3.5v8.3h5.1v-8.9q0-3.4-1.6-5.2-1.6-1.8-4.3-1.8-3 0-4.6 2.6v-2.2h-5.2q0.1 0.7 0.1 4.6 0 3.9-0.1 10.9z"
        />
      </g>
    </g>
  </svg>
);

export default Linkedin;
