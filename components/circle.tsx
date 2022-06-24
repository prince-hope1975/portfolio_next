import React from 'react'
import styles from "../styles/Home.module.css"
const Circle = (props) => {
  return (
    <div {...props} style={{background:props.bg}} className={styles.circle}></div>
  )
}

export default Circle
