import React from 'react'
import { FiActivity, FiDollarSign, FiStar, FiPackage } from 'react-icons/fi'
import styles from './ProviderDashboard.module.css'

const ProviderDashboard = () => {
  return (
    <div className="container">
      <div className={styles.dashboard}>
        <header className={styles.header}>
          <div>
            <h1>Provider Dashboard</h1>
            <p>Welcome back, TechPrint Hub!</p>
          </div>
          <div className={styles.status}>
            <span className={styles.statusDot} /> Active & Accepting Jobs
          </div>
        </header>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <FiDollarSign className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Total Earnings</span>
              <span className={styles.statValue}>28 450 Kč</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <FiActivity className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Active Jobs</span>
              <span className={styles.statValue}>4</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <FiStar className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Avg Rating</span>
              <span className={styles.statValue}>4.9</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <FiPackage className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Completed</span>
              <span className={styles.statValue}>128</span>
            </div>
          </div>
        </div>

        <section className={styles.jobsSection}>
          <h2>Incoming Print Requests</h2>
          <div className={styles.jobList}>
            {[
              { id: '1', model: 'Drone_Frame_V2.stl', material: 'ABS', price: 145, time: '2h ago' },
              { id: '2', model: 'Miniature_Knight.obj', material: 'Resin', price: 85, time: '5h ago' },
              { id: '3', model: 'Planter_Geometric.stl', material: 'PLA', price: 110, time: '1d ago' },
            ].map(job => (
              <div key={job.id} className={styles.jobCard}>
                <div className={styles.jobMain}>
                  <div className={styles.jobModel}>{job.model}</div>
                  <div className={styles.jobMeta}>{job.material} • {job.time}</div>
                </div>
                <div className={styles.jobPrice}>{job.price} Kč</div>
                <div className={styles.jobActions}>
                  <button className={styles.acceptBtn}>Accept</button>
                  <button className={styles.declineBtn}>Decline</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProviderDashboard
