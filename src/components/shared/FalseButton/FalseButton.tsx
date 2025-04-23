/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./FalseButton.module.css";
import { FC } from "react";

interface Props {
  text: string;
  btnType: string;
  onClick?: () => void;
  disabled?: any;
}

const FalseButton: FC<Props> = ({
  text,
  btnType,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`${styles.container} ${styles.btn} ${styles[btnType]} ${styles.pulseWrapper}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.pulse} />
      {text}
    </button>
  );
};
export default FalseButton;
