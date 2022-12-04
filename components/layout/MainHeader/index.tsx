import Link from "next/link";
import styles from "./index.module.css";
import React from "react";

const MainHeader = () => {
  const { navigation, header, logo } = styles;

  return (
    <header className={ header }>
      <div className={ logo }>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={ navigation }>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;