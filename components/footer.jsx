import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.icons}>
        {" "}
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillMail />
       
        <AiOutlineTwitter />
      </div>

      <div className={styles.copy}>&copy; 2022 Prince Charles </div>
    </footer>
  );
};
export default Footer;
