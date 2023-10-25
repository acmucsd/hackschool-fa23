import Image from 'next/image';
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
          {/* Add a title and short paragraph about your website here! */}
          <h1> Hello World! </h1>
        </div>
      <div className={styles.image}>
        {/* Make use of the Next Image component here! */}
        {/* Don't forget to add an image to the public folder, and import it into the file */}
      </div>
    </div>
  )
}
