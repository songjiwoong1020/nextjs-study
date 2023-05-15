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
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </>
  );
}

export default NavBar;