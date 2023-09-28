import { useContext } from "react";
import styles from "./ThemeToggleButton.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggleButton = () => {
  const {toggle} = useContext(ThemeContext);
  return (
    <div className={styles.containerLight}>
      <button onClick={toggle}>Click Me</button>
    </div>
  )
}

export default ThemeToggleButton