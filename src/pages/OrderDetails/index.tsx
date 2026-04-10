import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiMessageSquare, FiInfo, FiTruck, FiBox, FiMapPin } from 'react-icons/fi'
import { useBooking } from '../../context/BookingContext'
import { mockPrinters, materials } from '../../data/mockPrinters'
import styles from './OrderDetails.module.css'

const OrderDetails = () => {
  const { booking, setBooking } = useBooking()
  const navigate = useNavigate()

  const printer = mockPrinters.find(p => p.id === booking.selectedPrinterId)

  if (!printer) return <div className="container">No printer selected.</div>

  const shippingCost = booking.shippingOption === 'delivery' ? 100 : 0
  const totalCost = printer.estimatedCost + shippingCost

  const handleSpecChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setBooking(prev => ({ ...prev, [name]: name === 'infill' ? parseInt(value) : value }))
  }

  return (
    <div className="container">
      <div className={styles.page}>
        <header className={styles.headerArea}>
          <button className={styles.backBtn} onClick={() => navigate('/search')}>
            <FiArrowLeft /> Back
          </button>
          <h1>Review & Configure</h1>
        </header>

        <div className={styles.layout}>
          <div className={styles.mainColumn}>
            <section className={styles.section}>
              <div className={styles.gigPreview}>
                <img src={printer.image} alt={printer.name} className={styles.gigImg} />
                <div className={styles.gigInfo}>
                  <span className={styles.techTag}>{printer.technology}</span>
                  <h3>{printer.name}</h3>
                  <p>Service by <strong>{printer.provider}</strong></p>
                </div>
              </div>
            </section>

            <div className={styles.sideBySide}>
              <section className={styles.section}>
                <div className={styles.sectionHeader}>
                  <FiInfo />
                  <h3>Specifications</h3>
                </div>
                <div className={styles.specsCompact}>
                  <div className={styles.editItem}>
                    <label>Material</label>
                    <select name="material" value={booking.material} onChange={handleSpecChange}>
                      {materials.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                    </select>
                  </div>
                  <div className={styles.editItem}>
                    <label>Color</label>
                    <select name="color" value={booking.color} onChange={handleSpecChange}>
                      {['White', 'Black', 'Grey', 'Blue', 'Red'].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className={styles.editItem}>
                    <label>Infill: {booking.infill}%</label>
                    <input 
                      type="range" 
                      name="infill" 
                      min="0" 
                      max="100" 
                      step="5" 
                      value={booking.infill} 
                      onChange={handleSpecChange} 
                    />
                  </div>
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionHeader}>
                  <FiTruck />
                  <h3>Delivery</h3>
                </div>
                <div className={styles.shippingCompact}>
                  <div 
                    className={`${styles.miniOption} ${booking.shippingOption === 'pickup' ? styles.activeMini : ''}`}
                    onClick={() => setBooking(prev => ({ ...prev, shippingOption: 'pickup' }))}
                  >
                    <FiMapPin />
                    <div>
                      <strong>Pickup</strong>
                      <span>Free • {printer.distance}</span>
                    </div>
                  </div>
                  <div 
                    className={`${styles.miniOption} ${booking.shippingOption === 'delivery' ? styles.activeMini : ''}`}
                    onClick={() => setBooking(prev => ({ ...prev, shippingOption: 'delivery' }))}
                  >
                    <FiTruck />
                    <div>
                      <strong>Delivery</strong>
                      <span>100 Kč • 2-3 days</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <FiMessageSquare />
                <h3>Additional Notes</h3>
              </div>
              <textarea 
                className={styles.notesArea}
                placeholder="Any special instructions for the provider..."
                value={booking.notes}
                onChange={(e) => setBooking(prev => ({ ...prev, notes: e.target.value }))}
              />
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.summaryCard}>
              <h3>Order Total</h3>
              <div className={styles.summaryList}>
                <div className={styles.summaryRow}>
                  <span>{booking.material} Print</span>
                  <span>{printer.estimatedCost.toFixed(0)} Kč</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>{booking.shippingOption === 'pickup' ? 'Pickup' : 'Shipping'}</span>
                  <span>{shippingCost === 0 ? 'FREE' : `${shippingCost} Kč`}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Service Fee</span>
                  <span>25 Kč</span>
                </div>
              </div>
              
              <div className={styles.divider} />
              
              <div className={styles.totalAmount}>
                <span>Total</span>
                <span>{totalCost + 25} Kč</span>
              </div>

              <button 
                className={styles.confirmBtn}
                onClick={() => navigate('/checkout')}
              >
                Continue to Payment
              </button>
              <p className={styles.hint}>Secure checkout via Stripe</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
