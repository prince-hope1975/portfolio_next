import React from 'react'
import { useGlobalContext } from '../context'
import styles from "../styles/theme.module.css"

const ThemeProvider = (props) => {
    const { theme, setTheme } = useGlobalContext()
    const {className} =  props
  return (
    <div className={`${className} ${styles.default} ${styles[theme]}`} {...props}>{props.children}</div>
  )
}

export default ThemeProvider // eslint-disable-line