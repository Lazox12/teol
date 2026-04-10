import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiStar, FiClock, FiMapPin, FiChevronDown, FiLayers } from 'react-icons/fi'
import { useBooking } from '../../context/BookingContext'
import { mockPrinters, Printer } from '../../data/mockPrinters'
import styles from './Search.module.css'

const Search = () => {
  const { booking, setBooking } = useBooking()
  const navigate = useNavigate()
  const [filteredPrinters, setFilteredPrinters] = useState<Printer[]>(mockPrinters)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = mockPrinters.filter(p => p.materials.includes(booking.material))
      setFilteredPrinters(filtered)
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [booking.material])

  const handleBook = (printer: Printer) => {
    setBooking(prev => ({ ...prev, selectedPrinterId: printer.id }))
    navigate('/checkout')
  }

  return (
    <div className="container">
      <div className={styles.searchPage}>
        <aside className={styles.filters}>
          <div className={styles.filterGroup}>
            <h3>Filters</h3>
            <button className={styles.filterBtn}>Seller Level <FiChevronDown /></button>
            <button className={styles.filterBtn}>Service Options <FiChevronDown /></button>
            <button className={styles.filterBtn}>Technology <FiChevronDown /></button>
            <button className={styles.filterBtn}>Distance <FiChevronDown /></button>
          </div>

          <div className={styles.summaryBox}>
            <h4>Current Setup</h4>
            <p><strong>Model:</strong> {booking.fileName || 'None'}</p>
            <p><strong>Material:</strong> {booking.material}</p>
            <button onClick={() => navigate('/upload')} className={styles.editBtn}>Edit Setup</button>
          </div>
        </aside>

        <main className={styles.results}>
          <div className={styles.resultsHeader}>
            <h2>Available Print Farms</h2>
            <div className={styles.sort}>
              <span>Sort by: <strong>Relevance</strong></span>
              <FiChevronDown />
            </div>
          </div>

          {isLoading ? (
            <div className={styles.loadingGrid}>
              {[1, 2, 3].map(i => <div key={i} className={styles.skeletonCard} />)}
            </div>
          ) : (
            <div className={styles.printerGrid}>
              {filteredPrinters.map(printer => (
                <div key={printer.id} className={styles.printerCard}>
                  <div className={styles.imageWrapper}>
                    <img src={printer.image} alt={printer.name} className={styles.mainImg} />
                    <span className={styles.techBadge}>{printer.technology}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.providerInfo}>
                      <img src={printer.providerImage} alt={printer.provider} className={styles.providerAvatar} />
                      <div className={styles.providerDetails}>
                        <span className={styles.providerName}>{printer.provider}</span>
                        <span className={styles.providerLevel}>{printer.providerLevel}</span>
                      </div>
                    </div>

                    <h3 className={styles.gigTitle}>{printer.name}</h3>

                    <div className={styles.gigRating}>
                      <FiStar className={styles.starIcon} />
                      <strong>{printer.rating}</strong>
                      <span className={styles.reviewCount}>({printer.reviewCount})</span>
                    </div>

                    <div className={styles.gigSpecs}>
                      <span><FiLayers /> {printer.farmSize} Machines</span>
                      <span><FiMapPin /> {printer.distance}</span>
                      <span><FiClock /> {printer.estimatedTime}</span>
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.price}>
                        <span className={styles.unit}>STARTING AT</span>
                        <span className={styles.amount}>${printer.estimatedCost.toFixed(2)}</span>
                      </div>
                      <button className={styles.bookBtn} onClick={() => handleBook(printer)}>
                        Book Print
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Search
