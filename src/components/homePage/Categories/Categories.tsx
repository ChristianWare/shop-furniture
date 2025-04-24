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
          <div className={styles.top}>
            <h2 className={styles.heading}>Categories</h2>
          </div>
          <div className={styles.bottom}>
            {collections.map((col) => (
              <Link
                href={`/collections/${col.handle}`}
                key={col.id}
                className={styles.card}
              >

                {col.image ? (
                  <div className={styles.imgContainer}>
                    <Image
                      src={col.image.url}
                      alt={col.image.altText || col.title}
                      fill
                      className={styles.img}
                    />
                  </div>
                ) : (
                  <div className={styles.imgPlaceholder}>
                    {/* optional placeholder if no image */}
                    <span>No Image</span>
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
