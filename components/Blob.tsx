import styles from "../styles/Footer.module.css";

export const Blob =({className, children})=>{
return <div className={`${styles.blob} ${className}`}>
{children}
</div>
} 