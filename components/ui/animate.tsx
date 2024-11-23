import React from 'react'
import { motion } from 'framer-motion'

interface AnimateProps {
  children: React.ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0 }: AnimateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
} 