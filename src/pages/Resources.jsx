import React from 'react'
import sampleLevel from '../assets/SampleLevel.png'

const Resources = () => {

    const styles = {
        container: {
            backgroundColor: "#d7d7d7",
            height: "100%",
            width: "100%",
            display: "flex",
        },
        tableContainer: {
            backgroundImage:  `linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255, 0)), url(${sampleLevel})`,
            backgroundSize: "120%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#a7a7a7",
            height: "50%",
            width: "50%",
            maxWidth: "500px",
            maxHeight: "600px",
            textAlign: "center",
            display: "flex",
            flexFlow: "column",
            margin: "auto",
            border: "1px solid black",
            borderRadius: "25px",
            padding: "20px",
        },
        table: {
            backgroundColor: "#d7d7d7",
            margin: "auto",
            tableLayout: "auto",
            padding: "50px",
            border: "1px solid black",
            borderRadius: "25px",
            width: "80%",
        },
        ul: {
            textAlign: "left",
        }
    }

  return (
    <div style={styles.container}>
        <div style={styles.tableContainer}>
        <div>
            <h2>Resources We Used:</h2>
        </div>
            <table style={styles.table}>
                <tr>
                    <th><h3>Assets:</h3></th>
                </tr>
                <tr>
                    <td><a href="https://pixelbitsnbytes.itch.io/dinky-tiny-golf-free">Dinky Tiny Golf Asset Pack - Free by Mike</a></td>
                </tr>
            </table>
            <table style={styles.table}>
                <tr>
                    <th><h3>Tutorials we found helpful:</h3></th>
                </tr>
                <tr>
                  <td>
                    <ul style={styles.ul}>
                      <li><a href="https://www.youtube.com/watch?v=XtQMytORBmM&t=1780s">The Unity Tutorial for Complete Beginners</a></li>
                      <li><a href="https://youtu.be/0FMhDvNUzj4?si=HZ04af6cSTZDoBlt">Build a 2D Mini Golf Game in Unity</a></li>
                      <li><a href="https://www.youtube.com/watch?v=FXqwunFQuao">Camera Follow In Unity 2D</a></li>
                      <li><a href="https://www.youtube.com/watch?v=Dn8fCuaL-RA&ab_channel=AIA">Unity Button Tutorial</a></li>
                      <li><a href="https://www.youtube.com/watch?v=IuuKUaZQiSU&ab_channel=AIA">Intro to Unity UI</a></li>
                    </ul>
                  </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Resources