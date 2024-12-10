import React from 'react'
import video from '/MGMVideo1.mp4'

/* TODO: make pretty */
const DemonstrationVideo = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      height: "100%",
      width: "100%",
    },
    video: {
      display: "flex",
      width: "90%",
      maxHeight: "90%",
      margin: "auto",
    }
  }

  return (
    <div style={styles.container}>
      <video controls style={styles.video}>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default DemonstrationVideo