// This image component just uses Next.js's built-in Image component. It's recommended to use either this or a custom image service like Cloudinary or Imgix.
import { cn } from "@/utils";
import NextImage, { ImageProps } from "next/image";

export const Image = ({
  src,
  alt,
  width,
  height,
  priority,
  className,
  ...props
}: ImageProps) => {
  // convert width and height to numbers if they are strings
  width = typeof width === "string" ? parseInt(width, 10) : width;
  height = typeof height === "string" ? parseInt(height, 10) : height;

  const aspectRatio = width && height ? width / height : undefined;

  return (
    <NextImage
      {...props}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "auto" : "async"}
      className={cn("object-cover", className)}
      style={{ aspectRatio }}
    />
  );
};
