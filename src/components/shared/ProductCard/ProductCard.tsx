import styles from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
// import Img1 from "../../../../public/images/product.png";
import { ShopifyProduct } from "@/lib/shopify";
// import ShopifyImage from "../ShopifyImage/ShopifyImage";

interface ProductCardProps {
  product: ShopifyProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Format price with Intl
  const price = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: product.priceRange.minVariantPrice.currencyCode,
  }).format(Number(product.priceRange.minVariantPrice.amount));

  return (
    <Link href={`/products/${product.handle}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {product.featuredImage?.url ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            fill
            className={styles.image}
            sizes='(max-width: 600px) 100vw, 300px'
          />
          // <ShopifyImage
          //   src={product.featuredImage.url}
          //   alt={product.featuredImage.altText || product.title}
          //   scaletofill
          //   width={300}
          //   height={300}
          // />
        ) : (
          <div className={styles.placeholder}>No Image</div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </Link>
  );
}
