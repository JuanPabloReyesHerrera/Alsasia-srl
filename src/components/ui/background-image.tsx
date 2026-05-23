import Image from "next/image";

type BackGroundImageProps = {
  imageSrc: string;
  alt: string;
  className?: string;
};

export function BackgroundImage({
  imageSrc,
  alt,
  className,
}: BackGroundImageProps) {
  return (
    <div className={`fixed top-0 left-0 h-dvh w-full -z-10 ${className}`}>
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={alt}
          sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 80vw, 50dvw"
          fill
          priority
        />
      </div>
    </div>
  );
}
