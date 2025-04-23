// components/shared/ProductCard/ProductCard.tsx

import Link from "next/link";
import Image from "next/image";
import Img1 from "../../../../public/images/product.png";
import styles from "./ProductCard.module.css";
import { ShopifyProduct } from "@/lib/shopify";

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
            src={
              Img1
            } /* swap back to product.featuredImage.url once you’ve added cdn.shopify.com to next.config.js */
            alt={product.featuredImage.altText || product.title}
            fill
            className={styles.image}
            sizes='(max-width: 600px) 100vw, 300px'
          />
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
