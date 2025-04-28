/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./CollectionsPage.module.css";
import { createStorefrontClient } from "@/lib/shopify";
import Link from "next/link";

// Because this is in the `app/collections/[handle]/page.tsx`,
// Next.js will parse the route param as `params.handle`.
export default async function CollectionPage({
  params,
}: {
  params: { handle: string };
}) {
  // 1. Fetch collection data
  const collectionData = await getCollectionByHandle(params.handle);

  if (!collectionData) {
    return <h1 className={styles.heading}>Collection not found.</h1>;
  }

  const { title, descriptionHtml, products } = collectionData;

  return (
    <main className={styles.container}>
      <LayoutWrapper>
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

        {products.length === 0 ? (
          <h1>No products found in this collection.</h1>
        ) : (
          <div>
            {products.map((product: any) => (
              <div key={product.id}>
                {product.images?.[0] && (
                  <img
                    src={product.images[0].url}
                    alt={product.images[0].altText || product.title}
                    className=''
                  />
                )}

                <h2>{product.title}</h2>
                {product.variants?.map((variant: any) => (
                  <p key={variant.id}>
                    {variant.title} -{" "}
                    {`${variant.price.amount} ${variant.price.currencyCode}`}
                  </p>
                ))}

                <Link href={`/products/${product.handle}`}>View Product</Link>
              </div>
            ))}
          </div>
        )}
      </LayoutWrapper>
    </main>
  );
}

// -----------------------------------------
// Helper to fetch a collection by handle
// -----------------------------------------
async function getCollectionByHandle(handle: string) {
  const client = createStorefrontClient();
  const query = `
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

  const variables = { handle };

  try {
    const response = await client.query(query, variables);
    const collection = response?.data?.collection;

    if (!collection) {
      return null;
    }

    // Transform the product edges
    const products = collection.products.edges.map(({ node }: any) => {
      const variants = node.variants.edges.map(({ node: variant }: any) => ({
        id: variant.id,
        title: variant.title,
        price: variant.price,
      }));

      const images = node.images?.edges?.map((imgEdge: any) => ({
        url: imgEdge.node.url,
        altText: imgEdge.node.altText,
      }));

      return {
        id: node.id,
        title: node.title,
        handle: node.handle,
        variants,
        images: images ?? [],
      };
    });

    return {
      id: collection.id,
      title: collection.title,
      descriptionHtml: collection.descriptionHtml,
      products,
    };
  } catch (error) {
    console.error("Error fetching collection by handle:", error);
    return null;
  }
}
