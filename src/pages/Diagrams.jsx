import React from 'react'
import stateDiagram from '../assets/diagrams/state_diagram.jpg'
import loadNextLevelDiagram from '../assets/diagrams/load_next_level.png'
import classDiagram from '../assets/diagrams/class_diagram.png'
import playLevelDiagram from '../assets/diagrams/play_level_diagram.png'

/* TODO: Add all Diagrams */
const Diagrams = () => {
  const styles = {
    container: {
      backgroundColor: "#d7d7d7",
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      height: "100%",
      margin: "auto",
    },
    imageContainer: {
      textAlign: "center",
      flex: "50%",
    },
    image: {
      borderRadius: "25px",
      width: "90%",
      padding: "10px",
    },
    descriptionContainer: {
      textAlign: "justify",
      width: "70%",
      margin: "auto",
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <h1>Class Diagram</h1>
        <img src={classDiagram} alt="Class Diagram" style={styles.image}/>
      </div>
      <div style={styles.imageContainer}>
        <h1>Gameplay State Diagram</h1>
        <img src={stateDiagram} alt="State Diagram" style={styles.image}/>
      </div>
      <div style={styles.imageContainer}>
        <h1>Load Next Level Sequence Diagram</h1>        
        <img src={loadNextLevelDiagram} alt="Load Next Level" style={styles.image}/>
      </div>
      <div style={styles.imageContainer}>
        <h1>Play One Level Sequence Diagram</h1>        
        <img src={playLevelDiagram} alt="Play One Level" style={styles.image}/>
      </div>
    </div>
  )
}

export default Diagrams
