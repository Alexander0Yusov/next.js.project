"use client";
import Link from "next/link";
import styles from "./page.module.css";
import DarkmodeToggle from "../DarkmodeToggle/DarkmodeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Portfolio", url: "/portfolio" },
  { id: 4, title: "Blog", url: "/blog" },
  { id: 5, title: "Dashboard", url: "/dashboard" },
  { id: 6, title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const session = useSession();

  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        My App
      </Link>
      <div className={styles.links}>
        <DarkmodeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;