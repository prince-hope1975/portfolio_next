import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <Blob className={`${styles.footer}`}>
      <div className={styles.icons}>
        {" "}
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillMail />
       
        <AiOutlineTwitter />
      </div>

      <div className={styles.copy}>&copy; 2022 Prince Charles </div>
    </Blob>
  );
};
export const Blob =({className, children})=>{
return <div className={`${styles.blob} ${className}`}>
{children}
</div>
}
export default Footer;
