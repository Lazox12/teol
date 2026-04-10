import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCheckCircle, FiArrowLeft, FiCreditCard, FiLock, FiMapPin, FiTruck } from 'react-icons/fi'
import { useBooking } from '../../context/BookingContext'
import { mockPrinters } from '../../data/mockPrinters'
import styles from './Checkout.module.css'

const Checkout = () => {
  const { booking, resetBooking } = useBooking()
  const navigate = useNavigate()
  const [isSuccess, setIsSuccess] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const selectedPrinter = mockPrinters.find(p => p.id === booking.selectedPrinterId)
  
  const shippingCost = booking.shippingOption === 'delivery' ? 100 : 0
  const totalCost = (selectedPrinter?.estimatedCost || 0) + shippingCost + 25

  const handlePay = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  const handleDone = () => {
    resetBooking()
    navigate('/')
  }

  if (isSuccess) {
    return (
      <div className={styles.successScreen}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}><FiCheckCircle /></div>
          <h2>Booking Confirmed!</h2>
          <p>Your print job has been sent to <strong>{selectedPrinter?.provider}</strong>.</p>
          <div className={styles.orderId}>Order ID: #PRT-82910-X</div>
          <button className={styles.doneBtn} onClick={handleDone}>Back to Home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.checkoutPage}>
        <button className={styles.backBtn} onClick={() => navigate('/order-details')}>
          <FiArrowLeft /> Back to order details
        </button>

        <div className={styles.grid}>
          <div className={styles.paymentSection}>
            <div className={styles.card}>
              <h3>Payment Method</h3>
              <div className={styles.paymentMethods}>
                <div className={`${styles.method} ${styles.active}`}>
                  <FiCreditCard /> Credit / Debit Card
                </div>
                <div className={styles.method}>Digital Wallet</div>
              </div>

              <div className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className={styles.formGroup}>
                  <label>Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" />
                </div>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>CVV</label>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
              </div>

              <div className={styles.security}>
                <FiLock /> Secure SSL Encrypted Payment
              </div>
            </div>
          </div>

          <aside className={styles.summarySection}>
            <div className={styles.summaryCard}>
              <h3>Order Summary</h3>
              <div className={styles.summaryRow}>
                <span>Model</span>
                <strong>{booking.fileName}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Material</span>
                <strong>{booking.material} ({booking.color})</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Option</span>
                <strong>{booking.shippingOption === 'pickup' ? 'Local Pickup' : 'Delivery'}</strong>
              </div>
              {booking.notes && (
                <div className={styles.notesSummary}>
                  <span>Notes:</span>
                  <p>{booking.notes}</p>
                </div>
              )}
              
              <hr className={styles.divider} />

              <div className={styles.summaryRow}>
                <span>Print Cost</span>
                <span>{selectedPrinter?.estimatedCost.toFixed(0)} Kč</span>
              </div>
              <div className={styles.summaryRow}>
                <span>{booking.shippingOption === 'pickup' ? 'Pickup' : 'Shipping'}</span>
                <span>{shippingCost === 0 ? 'FREE' : `${shippingCost} Kč`}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Service Fee</span>
                <span>25 Kč</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Total</span>
                <span>{totalCost.toFixed(0)} Kč</span>
              </div>

              <button 
                className={styles.payBtn} 
                onClick={handlePay}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay ${totalCost.toFixed(0)} Kč`}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Checkout
