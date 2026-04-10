import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUpload, FiFile, FiCheck, FiArrowRight } from 'react-icons/fi'
import { useBooking } from '../../context/BookingContext'
import { materials } from '../../data/mockPrinters'
import styles from './Upload.module.css'

const Upload = () => {
  const { booking, setBooking } = useBooking()
  const navigate = useNavigate()
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setBooking(prev => ({ ...prev, file, fileName: file.name }))
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setIsDragging(true)
    else if (e.type === 'dragleave') setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setBooking(prev => ({ ...prev, file, fileName: file.name }))
    }
  }

  const handleConfigChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setBooking(prev => ({ ...prev, [name]: name === 'infill' ? parseInt(value) : value }))
  }

  const handleNext = () => {
      navigate('/search')
  }

  return (
    <div className="container">
      <section className={styles.uploadSection}>
        <div className={styles.header}>
          <h1>Configure Your Print</h1>
          <p>Upload your 3D model and select the desired specifications.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.uploadArea}>
            <div 
              className={`${styles.dropZone} ${isDragging ? styles.dragging : ''} ${booking.fileName ? styles.hasFile : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                id="fileUpload" 
                className={styles.fileInput} 
                onChange={handleFileChange}
                accept=".stl,.obj,.step,.3mf"
              />
              <label htmlFor="fileUpload" className={styles.dropLabel}>
                {booking.fileName ? (
                  <div className={styles.fileInfo}>
                    <FiFile className={styles.fileIcon} />
                    <span className={styles.fileName}>{booking.fileName}</span>
                    <span className={styles.changeFile}>Change File</span>
                  </div>
                ) : (
                  <>
                    <FiUpload className={styles.uploadIcon} />
                    <span className={styles.uploadText}>Drag & drop your 3D model</span>
                    <span className={styles.supportedFiles}>STL, OBJ, STEP, 3MF (Max 50MB)</span>
                  </>
                )}
              </label>
            </div>
            
            {booking.fileName && (
              <div className={styles.previewMock}>
                <div className={styles.previewHeader}>
                  <span>3D Preview</span>
                  <div className={styles.dots}><span /><span /><span /></div>
                </div>
                <div className={styles.mockModel}>
                  {/* In a real app, a 3D viewer would go here */}
                  <div className={styles.modelPlaceholder}>
                    <div className={styles.box} />
                    <span>3D Visualization Active</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.configArea}>
            <div className={styles.configCard}>
              <h3>Specifications</h3>
              
              <div className={styles.formGroup}>
                <label>Material</label>
                <select name="material" value={booking.material} onChange={handleConfigChange}>
                  {materials.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                </select>
                <p className={styles.desc}>
                  {materials.find(m => m.name === booking.material)?.description}
                </p>
                {booking.material.includes('Nylon') && (
                  <div className={styles.slsBadge}>
                    <FiCheck className={styles.checkIcon} /> Best for functional parts (No supports)
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Color</label>
                <div className={styles.colorGrid}>
                  {['White', 'Black', 'Grey', 'Blue', 'Red'].map(c => (
                    <button 
                      key={c}
                      className={`${styles.colorBtn} ${booking.color === c ? styles.active : ''}`}
                      onClick={() => setBooking(prev => ({ ...prev, color: c }))}
                    >
                      <span className={styles.swatch} style={{ background: c.toLowerCase() }} />
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Infill Density: {booking.infill}%</label>
                <input 
                  type="range" 
                  name="infill" 
                  min="0" 
                  max="100" 
                  step="5" 
                  value={booking.infill} 
                  onChange={handleConfigChange} 
                />
                <div className={styles.rangeLabels}>
                  <span>Light</span>
                  <span>Solid</span>
                </div>
              </div>

              <button 
                className={styles.nextBtn}
                onClick={handleNext}
              >
                Find Available Printers <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Upload
