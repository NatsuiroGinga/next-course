import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

interface Props extends React.PropsWithChildren {
  link?: string;
}

const Button = (props: Props) => {
  const { children, link } = props;
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