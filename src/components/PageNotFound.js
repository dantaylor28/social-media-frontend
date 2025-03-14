import React from 'react'
import Asset from "../components/Asset"
import NoResults from "../assets/no-results.png"
import styles from "../styles/PageNotFound.module.css"

const PageNotFound = () => {
  return (
    <div className={styles.Asset}>
        <Asset src={NoResults} message="Oops.. This page doesn't seem to exist!" />
    </div>
  )
}

export default PageNotFound