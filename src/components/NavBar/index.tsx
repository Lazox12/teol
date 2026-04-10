import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiUser, FiMenu } from 'react-icons/fi'
import styles from './NavBar.module.css'
import logoImg from '../../assets/logo.png'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} container`}>
        <Link to="/" className={styles.logo}>
          <img src={logoImg} alt="Print3D Logo" className={styles.logoImg} />
          <span>PrintShare</span>
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
