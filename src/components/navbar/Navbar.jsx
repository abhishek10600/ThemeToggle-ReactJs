import styles from "./Navbar.module.css";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton";

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.logo}>Abhishek Sharma</div>
        </div>
        <div className={styles.right}>
            <div className={styles.links}>
                <ThemeToggleButton/>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </div>
        </div>
    </div>
  )
}

export default Navbar