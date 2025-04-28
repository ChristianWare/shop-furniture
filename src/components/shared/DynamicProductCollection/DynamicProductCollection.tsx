import Link from "next/link";
import styles from "./DynamicProductCollection.module.css";
import { getProductsByCollectionHandle, ShopifyProduct } from "@/lib/shopify";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import Product from "../Product/Product";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

interface Props {
  title: string;
  category: string;
}

/** Revalidate at most once per hour (ISR) */
export const revalidate = 60;

export default async function DynamicProductCollection({
  title,
  category,
}: Props) {
  // fetch up to 6 products
  const products: ShopifyProduct[] = await getProductsByCollectionHandle(
    category,
    4
  );

  // loading skeleton if no products yet (or during build/fetch)
  if (!products.length) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h2 className={styles.heading}>{title}</h2>
            <div className={styles.bottom}>
              {[...Array(4)].map((_, i) => (
                <Product key={i} isLoading />
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  // render the collection
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>{title}</h2>
        </div>
        <div className={styles.content}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          <Link
            href={`/collections/${category}`}
            className={styles.viewAllParent}
          >
            <div className={styles.viewAllTop}>
              <span className={styles.viewAllTitle}>View All</span>
              {/* <Arrow className={styles.arrow} /> */}
            </div>
            <div className={styles.btnContainer}>
              <FalseButton btnType='secondary' text='View Collection' />
            </div>
          </Link>
        </div>
      </LayoutWrapper>
    </section>
  );
}
