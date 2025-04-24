/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes } from "react";

type ShopifyImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "alt"
> & {
  /** The raw Shopify CDN URL (e.g. from product.featuredImage.url) */
  src: string | undefined;
  /** Fallback if `src` is falsy */
  placeholder?: string;
  alt?: string | null;
} & (
    | {
        /** Crop/scale to *exactly* width×height */
        scaletofill?: true;
        width: number;
        height: number;
      }
    | {
        /** Don’t crop—just resize width, keep aspect ratio */
        scaletofill: false;
      }
  );

export default function ShopifyImage({
  src,
  placeholder = "/placeholder.png",
  alt,
  scaletofill,
  ...props
}: ShopifyImageProps) {
  // pull out width/height so we don't pass scaletofill to <img>
  const { width, height, ...restProps } = props as any;

  // build the final URL: either use the Shopify CDN or placeholder
  const baseUrl = src || placeholder;
  const shouldScale = scaletofill === undefined || scaletofill === true;

  const imageUrl = src
    ? shouldScale
      ? // exact crop to width×height
        `${baseUrl}?width=${width}&height=${height}&crop=fill`
      : // just resize width, keep ratio
        `${baseUrl}?width=${width}`
    : placeholder;

  return (
    <img
      src={imageUrl}
      alt={alt || ""}
      width={width}
      height={height}
      {...restProps}
    />
  );
}
