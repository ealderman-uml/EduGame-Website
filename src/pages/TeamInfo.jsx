import React from 'react'
import EdProfile from '../assets/Ed.png'
import ChrisProfile from '../assets/Chris.png'
import BradenProfile from '../assets/Braden.png'
import AustinProfile from '../assets/Austin.jfif'

const TeamInfo = () => {
  const styles = {
    tableContainer: {
      backgroundColor: "#979797",
      height: "100%",
      width: "100%",
      textAlign: "center",
      display: "flex",
    },
    title: {
      textAlign: "center",
    },
    table: {
      backgroundColor: "#d7d7d7",
      borderRadius: "25px",
      border: "1px solid black",
      padding: "50px",
      margin: "auto",
      //whiteSpace: "nowrap",
      //tableLayout: "fixed",
    },
    image: {
      width: "250px",
      padding: "25px",
    },
  }

  return (
    <>
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <tr>
          <th colSpan={4}><h1 style={styles.title}>Our Dev Team:</h1></th>
        </tr>
        <tr>
          <td><img src={EdProfile} alt="Profile" style={styles.image} /></td>
          <td><img src={ChrisProfile} alt="Profile" style={styles.image} /></td>
          <td><img src={BradenProfile} alt="Profile" style={styles.image} /></td>
          <td><img src={AustinProfile} alt="Profile" style={styles.image} /></td>
        </tr>
        <tr>
          <th>Ed Alderman</th>
          <th>Christopher Lambert</th>
          <th>Braden Maillet</th>
          <th>Austin Nguyen</th>
        </tr>
        <tr>
          <td>edward_alderman@student.uml.edu</td>
          <td>christopher_lambert@student.uml.edu</td>
          <td>braden_maillet@student.uml.edu</td>
          <td>austin_nguyen@student.uml.edu</td>
        </tr>
        <tr>
          <td><a href="https://github.com/ealderman-uml">Github</a></td>
          <td><a href="https://github.com/ChrisLambert03">Github</a>&emsp;<a href="www.linkedin.com/in/chris-lambert-39427223">LinkedIn</a></td>
          <td><a href="https://github.com/bradenmaillet">Github</a>&emsp;<a href="https://www.linkedin.com/in/braden-maillet-b584b5253/">LinkedIn</a></td>
          <td><a href="https://github.com/CodeAustin">Github</a>&emsp;<a href="https://www.linkedin.com/in/austin-nguyen-59660b175/">LinkedIn</a></td>
        </tr>
      </table>
      </div>
  </>
  )
}

export default TeamInfo
