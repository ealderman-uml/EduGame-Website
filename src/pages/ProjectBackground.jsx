import React from 'react'
import StartMenu from '../assets/StartMenu.png'
import SampleLevel1 from '../assets/SampleLevel1.png'
import SampleLevel2 from '../assets/SampleLevel2.png'

const ProjectBackground = () => {
  const styles = {
    container: {
      backgroundColor: "#d7d7d7",
      display: "flex",
      height: "100%",
      margin: "auto",
    },
    imageContainer: {
      textAlign: "center",
      width: "100%",
    },
    image: {
      borderRadius: "25px",
      width: "100%",
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
      <div style={styles.descriptionContainer}>
        <div style={styles.imageContainer}>
          <h1>Mini-Golf Mania</h1>
          <img src={StartMenu} alt="Start Menu" style={styles.image} />
        </div>
        <h2>Project Background</h2>
        <p>
          Our team set out to design an educational game to help reinforce algebraic concepts for middle school students.
          So-called "edutainment" games have been shown to be effective in engaging students and improving learning outcomes.
          They also provide young students a unique opportunity to apply concepts to a practical, stimulating problem.
        </p>
        <h2>Project Description</h2>
        <p>
          Our Game, Mini Golf Mania, is an interactive,
          web-based application designed to teach algebra concepts through engaging gameplay.
          It is intended as a standalone educational product,
          leveraging mini golf gameplay to create a fun and interactive learning experience. 
          By solving mathematical equations, players influence the trajectory of a golf ball,
          merging gameplay with core algebraic principles.
          MGM is accessible via standard web browsers and is compatible across desktop and mobile platforms,
          making it a versatile educational tool for students.
        </p>
        <h2>Target Audience</h2>
        <p>
        The intended users for MGM are students primarily in grades 7 and 8, who are learning Algebra I.
        These users are expected to have a foundational understanding of algebraic principles,
        including linear equations and expressions, which are typically introduced in 7th grade.
        Users should be comfortable working with linear equations in point-slope, slope-intercept,
        and standard form. By 8th grade, students are expected to have developed proficiency with linear relationships,
        equations and expressions as recommended by the Massachusetts Department of Education’s advisory on the Mathematics Curriculum Framework.
        The game is designed to challenge and engage users who are proficient in algebraic reasoning therefore MGM targets higher-level middle school students who can apply mathematical concepts to solve interactive challenges.
        </p>
        <div style={styles.imageContainer}>
          <img src={SampleLevel2} alt="SampleLevel2" style={styles.image} />
        </div>
      </div>
    </div>
  )
}

export default ProjectBackground