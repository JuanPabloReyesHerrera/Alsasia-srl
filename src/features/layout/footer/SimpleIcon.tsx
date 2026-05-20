interface SimpleIconProps {
  path: string;
  title: string;
  size?: number;
  className?: string;
}

export function SimpleIcon({ path, title, size = 16, className }: SimpleIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}
