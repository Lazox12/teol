import React from 'react'
import { Link } from 'react-router-dom'
import { FiPrinter, FiSearch, FiUser, FiMenu } from 'react-icons/fi'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} container`}>
        <Link to="/" className={styles.logo}>
          <FiPrinter /> <span>Print3D</span>
        </Link>
        <div className={styles.links}>
          <Link to="/search">Find Printers</Link>
          <Link to="/upload">Upload Model</Link>
          <Link to="/provider" className={styles.providerLink}>Become a Provider</Link>
          <button className={styles.profileBtn}>
            <FiUser />
          </button>
        </div>
        <button className={styles.mobileMenu}>
          <FiMenu />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
