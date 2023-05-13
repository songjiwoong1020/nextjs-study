import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css';

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      {/* 
      ModuleCSS
      <nav className={styles.nav}>
        <Link className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`} href="/">
          Home
        </Link>
        <Link className={`${styles.link} ${router.pathname === '/about' ? styles.active : ''}`} href="/about">
          About
        </Link>
      </nav> 
      */}
      <nav>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          background-color: blanchedalmond;
        }
      `}</style>
    </>
  );
}

export default NavBar;