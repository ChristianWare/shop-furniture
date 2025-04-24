// components/shared/Categories/Categories.tsx

import Image from "next/image";
import Link from "next/link";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Categories.module.css";
import { getAllCollections, ShopifyCollection } from "@/lib/shopify";

export const revalidate = 3600; // ISR

export default async function Categories() {
  const collections: ShopifyCollection[] = await getAllCollections(20);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>Categories</h2>
          <div className={styles.bottom}>
            {collections.map((col) => (
              <Link
                key={col.id}
                href={`/collections/${col.handle}`}
                className={styles.card}
              >
                {col.image?.url && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={col.image.url}
                      alt={col.image.altText || col.title}
                      width={300}
                      height={200}
                      className={styles.image}
                      sizes='(max-width: 600px) 100vw, 300px'
                    />
                  </div>
                )}
                <h3 className={styles.cardTitle}>{col.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
