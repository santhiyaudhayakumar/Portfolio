import Leafbg from '../assets/leaf.jpg'
import resume from '../assets/Resume_Santhiya.pdf'

const Hero = () => {
  return (
    <div className="hero">
      <img src={ Leafbg } alt="Hero-Img" />
      <h1><span>I'm Santhiya,</span> Frontend Developer</h1>
      <p>Currently pursuing MERN stack development, I've completed frontend development with ReactJS. I'm excited to apply my skills and knowledge as a Frontend Developer.</p>
      <a href={resume} className="nav-connect anchor-link" download='Resume-Santhiya.pdf' >My Resume</a>
    </div>
  )
}

export default Hero