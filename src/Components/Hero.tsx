import Leafbg from '../assets/leaf.jpg'
import resume from '../assets/Resume.Santhiya.pdf'

const Hero = () => {
  return (
    <div className="hero">
      <img src={ Leafbg } alt="Hero-Img" />
      <h1><span>I'm Santhiya,</span> Frontend Developer</h1>
      <p>Currently pursuing MERN stack development, I've completed frontend development with ReactJS. I'm excited to apply my skills and knowledge as a Frontend Developer.</p>
      <div className="buttons">
      <a href='https://github.com/santhiyaudhayakumar' target='_blank' className="nav-connect">Git Hub</a>
      <a href={resume} className="nav-connect" download='Resume-Santhiya.pdf' >My Resume</a>
      </div>
    </div>
  )
}

export default Hero