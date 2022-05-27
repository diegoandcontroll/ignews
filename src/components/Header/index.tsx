import Image from "next/image";
import { SignInButton } from "../SignInButton";
import styles from "./style.module.scss";
export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/logo.svg" alt="logo" width={120} height={80} />
        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
