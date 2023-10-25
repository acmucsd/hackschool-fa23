import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        /* return a navbar with a top level div, and links to the homepage, Game page, and History page! */
        /* Hint: the Next.js Link component may come in handy https://nextjs.org/docs/pages/api-reference/components/link */
        <div id={styles.navbar}>
            <div className={styles.title}>
                {/* Link to the home page here! */}
            </div>

            {/* Link to other pages here! */}

        </div>
    )
}

// Export the NavBar, and import it in pages/_app.jsx to render it on all pages of your website!