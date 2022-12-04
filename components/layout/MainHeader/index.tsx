import Link from "next/link";
import styles from "./index.module.css";
import React from "react";

const MainHeader: React.FC = () => {
  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={ styles.navigation }>
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