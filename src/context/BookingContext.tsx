import React, { createContext, useContext, useState } from 'react'

interface BookingState {
  file: File | null
  fileName: string | null
  material: string
  color: string
  infill: number
  notes: string
  shippingOption: 'pickup' | 'delivery'
  selectedPrinterId: string | null
}

interface BookingContextType {
  booking: BookingState
  setBooking: React.Dispatch<React.SetStateAction<BookingState>>
  resetBooking: () => void
}

const initialState: BookingState = {
  file: null,
  fileName: null,
  material: 'PLA',
  color: 'White',
  infill: 20,
  notes: '',
  shippingOption: 'pickup',
  selectedPrinterId: null,
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [booking, setBooking] = useState<BookingState>(initialState)

  const resetBooking = () => setBooking(initialState)

  return (
    <BookingContext.Provider value={{ booking, setBooking, resetBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
