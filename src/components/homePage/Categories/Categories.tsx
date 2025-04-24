import Link from "next/link";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Categories.module.css";
import { getAllCollections, ShopifyCollection } from "@/lib/shopify";

export const revalidate = 3600; // ISR: refresh once per hour

export default async function Categories() {
  const collections: ShopifyCollection[] = await getAllCollections(20);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Categories</h2>
            <div className={styles.bottom}>
              {collections.map((col) => (
                <Link
                  key={col.id}
                  href={`/collections/${col.handle}`}
                  className={styles.card}
                >
                  <h3 className={styles.cardTitle}>{col.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
