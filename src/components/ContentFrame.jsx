import React from 'react'
import AppRoutes from './AppRoutes'

const ContentFrame = () => {
  const styles = {
    frame: {
      height: "100%",
      width: "100%",
    }
  }
  return (
    <div style={styles.frame}>
      <AppRoutes />
    </div>
  )
}

export default ContentFrame
