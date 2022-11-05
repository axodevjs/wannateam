import React, { FC, ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  type: string;
  margin?: string;
  onClick?: void;
};

const Button: FC<Props> = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.type === "primary" && styles.primary
      } ${props.type === "outlined" && styles.outlined}`}
      style={{ margin: props?.margin ? props?.margin : "" }}
      onClick={() => props?.onClick && props?.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
