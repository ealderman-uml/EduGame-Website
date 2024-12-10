import React from 'react'

const Presentation = () => {
  const styles = {
    iframe: {
      width: "100%",
      height: "100%",
    }
  }
  return (
    <iframe src="https://docs.google.com/presentation/d/1z0oY6wxB4F3GsoubtAXqWK0nPsGdO5RXqtdPfHa13uc/edit#slide=id.p" frameborder="0" style={styles.iframe}></iframe>
  )
}

export default Presentation