import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

interface Props extends React.PropsWithChildren {
  link?: string;
}

const Button = ({ children, link }: Props) => {
  return (
    <>
      {
        link ?
        <Link href={ link } className={ styles.btn }>
          { children }
        </Link> :
        <button className={ styles.btn }>
          { children }
        </button>
      }
    </>
  );
}

export default Button;