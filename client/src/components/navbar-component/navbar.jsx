import Link from 'next/link';
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div id={styles.navbar}>
            <div className={styles.title}>
                <Link href="/">HackRacer</Link>
            </div>
            <div className={styles.nav_buttons}>
                <Link href="/gamePage">Play Game</Link>
                <Link href="/history"> History </Link>
            </div>
        </div>
    )
}

export default NavBar;