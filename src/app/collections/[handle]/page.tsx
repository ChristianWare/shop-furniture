/* app/collections/[handle]/page.tsx
   Collection detail page – complete, working version */

/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./CollectionsPage.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { createStorefrontClient, ShopifyProduct } from "@/lib/shopify";
import ProductCard from "@/components/shared/ProductCard/ProductCard";

interface CollectionData {
  id: string;
  title: string;
  descriptionHtml: string | null;
  products: ShopifyProduct[];
}

// ────────────────────────────────────────────────────────────
// Page component
// ────────────────────────────────────────────────────────────
export default async function CollectionPage({
  params,
}: {
  params: { handle: string };
}) {
  const collectionData = await getCollectionByHandle(params.handle);

  if (!collectionData) {
    return <h1 className={styles.heading}>Collection not found.</h1>;
  }

  const { title, descriptionHtml, products } = collectionData;

  return (
    <main className={styles.container}>
      <LayoutWrapper>
        {/* ── hero block ─────────────────────────────────────── */}
        <div className={styles.top}>
          <div className={styles.t1}>
            <h1 className={styles.heading}>{title}</h1>
          </div>

          <div className={styles.t2}>
            {descriptionHtml && (
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            )}
          </div>

          <div className={styles.t3}>filter button here</div>
        </div>

        {/* ── products grid ─────────────────────────────────── */}
        {products.length === 0 ? (
          <h1 className={styles.heading}>Products coming soon.</h1>
        ) : (
          <div className={styles.bottom}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </LayoutWrapper>
    </main>
  );
}

// ────────────────────────────────────────────────────────────
// Helper: fetch collection by handle
// ────────────────────────────────────────────────────────────
async function getCollectionByHandle(
  handle: string
): Promise<CollectionData | null> {
  const client = createStorefrontClient();

  const query = /* GraphQL */ `
    query collectionByHandle($handle: String!) {
      collection(handle: $handle) {
        id
        title
        descriptionHtml

        products(first: 12) {
          edges {
            node {
              id
              title
              handle

              # ── the fields ProductCard needs ───────────────
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              featuredImage {
                url
                altText
              }

              # ── still grabbing images + variants for later ─
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 5) {
                edges {
                  node {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const { data } = await client.query(query, { handle });
    const collection = data?.collection;
    if (!collection) return null;

    const products: ShopifyProduct[] = collection.products.edges.map(
      ({ node }: any) => ({
        id: node.id,
        title: node.title,
        handle: node.handle,

        // ── required by <ProductCard /> ─────────────────────
        priceRange: node.priceRange,
        featuredImage: node.featuredImage,

        // ── optional extras you may use elsewhere ───────────
        variants: node.variants.edges.map(({ node: v }: any) => ({
          id: v.id,
          title: v.title,
          price: v.price,
        })),
        images:
          node.images?.edges?.map(({ node: img }: any) => ({
            url: img.url,
            altText: img.altText,
          })) ?? [],
      })
    );

    return {
      id: collection.id,
      title: collection.title,
      descriptionHtml: collection.descriptionHtml,
      products,
    };
  } catch (err) {
    console.error("Error fetching collection by handle:", err);
    return null;
  }
}
