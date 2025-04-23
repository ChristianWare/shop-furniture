/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Button.module.css";
import { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  onClick?: () => void;
  disabled?: any;
  children?: ReactNode;
}

const Button: FC<Props> = ({
  href = "",
  text,
  btnType,
  target = "",
  onClick,
  disabled,
  children,
}) => {
  return (
    <button className={styles.container} onClick={onClick} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {text || children}
      </Link>
    </button>
  );
};
export default Button;
