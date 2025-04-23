import styles from "./Product.module.css";

interface ProductProps {
  /** if true, show skeleton; otherwise render nothing */
  isLoading?: boolean;
}

export default function Product({ isLoading = false }: ProductProps) {
  if (!isLoading) return null;

  return (
    <div className={styles.skeletonCard} aria-busy='true'>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonText} />
      <div className={styles.skeletonTextShort} />
    </div>
  );
}
