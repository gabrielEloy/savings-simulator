function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0a1 1 0 011 1v22a1 1 0 11-2 0V1a1 1 0 011-1z"
        fill="#CBD5DC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.318 5.318A4.5 4.5 0 019.5 4H17a1 1 0 110 2H9.5a2.5 2.5 0 100 5h5a4.5 4.5 0 110 9H6a1 1 0 110-2h8.5a2.5 2.5 0 000-5h-5a4.5 4.5 0 01-3.182-7.682z"
        fill="#CBD5DC"
      />
    </svg>
  )
}

export default SvgComponent
