import React from 'react'
import { Link } from 'react-router-dom'
import { FiUpload, FiSearch, FiCheckCircle } from 'react-icons/fi'
import styles from './Home.module.css'
import heroImg from '../../assets/hero.png'

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Bring Your Ideas to Life. <br />
              <span>Find Local 3D Printers Instantly.</span>
            </h1>
            <p className={styles.subtitle}>
              Upload your 3D models and connect with printer owners nearby. 
              The easiest way to get your prototypes and parts printed.
            </p>
            <div className={styles.cta}>
              <Link to="/upload" className={styles.primaryBtn}>
                <FiUpload /> Upload Model
              </Link>
              <Link to="/search" className={styles.secondaryBtn}>
                <FiSearch /> Browse Printers
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <img src={heroImg} alt="3D Printing Hero" className={styles.heroImg} />
          </div>
        </div>
        <div className={styles.heroGradient}></div>
      </header>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How it Works</h2>
          <div className={styles.grid}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}><FiUpload /></div>
              <h3>1. Upload</h3>
              <p>Upload your STL, OBJ, or STEP files to our secure platform.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}><FiSearch /></div>
              <h3>2. Choose</h3>
              <p>Select from hundreds of local printers based on material and price.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}><FiCheckCircle /></div>
              <h3>3. Print</h3>
              <p>Get notified when your print is ready for pickup or delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
