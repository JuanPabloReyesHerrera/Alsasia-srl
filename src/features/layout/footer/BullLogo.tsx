interface BullLogoProps {
  className?: string;
}

export function BullLogo({ className }: BullLogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Alsasia — toro de cría"
    >
      {/* Cuernos */}
      <path
        d="M10 18 C6 10, 2 8, 4 20 C6 28, 14 26, 18 24"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
      />
      <path
        d="M54 18 C58 10, 62 8, 60 20 C58 28, 50 26, 46 24"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
      />
      {/* Cabeza */}
      <ellipse cx="32" cy="32" rx="18" ry="16" fill="currentColor" opacity="0.08" />
      <path
        d="M14 28 C14 18, 50 18, 50 28 C50 40, 44 50, 32 50 C20 50, 14 40, 14 28Z"
        stroke="currentColor" strokeWidth="2"
      />
      {/* Ojos */}
      <circle cx="24" cy="30" r="2.2" fill="currentColor" />
      <circle cx="40" cy="30" r="2.2" fill="currentColor" />
      {/* Hocico */}
      <ellipse cx="27" cy="42" rx="2.8" ry="1.8" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="37" cy="42" rx="2.8" ry="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 38 Q32 36, 43 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
