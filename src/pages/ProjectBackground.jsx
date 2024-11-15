import React from 'react'
import StartMenu from '../assets/StartMenu.png'
import SampleLevel2 from '../assets/SampleLevel2.png'
import StartMenu from '../assets/StartMenu.png'
import SampleLevel2 from '../assets/SampleLevel2.png'

const ProjectBackground = () => {
  const styles = {
    container: {
      backgroundColor: "#d7d7d7",
      display: "flex",
      flexFlow: "column",
      height: "100%",
      //width: "100%",
      margin: "auto",
      padding: "0 10px 0 10px",
    },
    assignmentContainer: {
      textAlign: "center",
      width: "70%",
      margin: "auto",
    },
    imageContainer: {
      textAlign: "center",
      width: "100%",
    },
    image: {
      borderRadius: "25px",
      width: "50%",
      padding: "10px",
    },
    descriptionContainer: {
      textAlign: "center",
      width: "70%",
      margin: "auto",
    },
  }


  const styles = {
    container: {
      backgroundColor: "#d7d7d7",
      display: "flex",
      flexFlow: "column",
      height: "100%",
      //width: "100%",
      margin: "auto",
      padding: "0 10px 0 10px",
    },
    assignmentContainer: {
      textAlign: "center",
      width: "70%",
      margin: "auto",
    },
    imageContainer: {
      textAlign: "center",
      width: "100%",
    },
    image: {
      borderRadius: "25px",
      width: "50%",
      padding: "10px",
    },
    descriptionContainer: {
      textAlign: "center",
      width: "70%",
      margin: "auto",
    },
  }


  return (
    <div style={styles.container}>
      <div style={styles.assignmentContainer}>
        <h1>Edutainment Game</h1>
        <p>
          As video games become increasingly more common, teachers and parents are increasingly
          using them to supplement their children’s educations in a fun way. Educational games may
          improve student engagement and incentivize learning. In the past, games such as the Oregon
          Trail, Number Munchers, SimCity, the Dr. Brain series, and Mavis Beacon Teaches Typing
          have all been used to either teach or reinforce ideas.
        </p>
        <p>
          Your team will design and prototype a new educational video game. This game must
          be suitable for students between 4th to 8th grade (late elementary school or middle school).
          You may choose to narrow the target age range. The target demographic will likely have an
          effect on the text, concepts, and mechanics that you want to use; Young children may not
          have the reading, motor, or analytical skills required for some designs.
        </p>
        <p>
          The game must have an educational component. The Massachusetts Department of Education and Common Core standards can give some suggestions for topics that are appropriate
          for different age levels
        </p>
        <p>
          This project is open-ended. You have freedom to choose the language, engine, genre, and
          topic for your game.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img src={StartMenu} alt="Start Menu" style={styles.image} />
        <img src={SampleLevel2} alt="SampleLevel2" style={styles.image} />
      </div>
      <div style={styles.descriptionContainer}>
        <h2>Mini-Golf Mania</h2>
        <p>
          Our team decided to approach this assignment by building a mini-golf-style game
          that focuses on reinforcing graphing concepts from Algebra 1.
          Players will be met with an overhead view of a golf course that has the first quadrant
          of the cartesian plane overlaid on top of it.
          Players are provided x and y coordinates for the ball's starting point, and for the hole.
          They are then presented with an incomplete algebraic expression to fill out that will define the trajectory of the ball.
          Once they have filled this out, they will have to select the power to shoot the ball with to determine whether it will overshoot or undershoot the hole.
          Once the ball's power is set, the ball is shot following the trajectory defined by the equation they have filled out.
          If they have successfully solved the equation and entered a reasonable power, the ball will sink into the hole, and the player progresses to the next level.
          If they miss the hole, or if the power they entered is too low or too high, the ball will miss the hole, and they'll need to start the level again.
        </p>
      </div>
    </div>
  )
}

export default ProjectBackground