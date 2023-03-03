import Link from "next/link";
import React from "react";
import classes from "./Header.module.css";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div>
        <Link href="/" className={classes.logo}>
          Aripov.js
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
