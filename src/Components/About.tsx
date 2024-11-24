import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";

const About = () => {
  return (
    <div id='about' className="about">
      <h1 className='green-text'>About Me</h1>
      <div className="container">
        <div className="container2">
          <p>Building on my expertise in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, and ReactJS, I'm a Frontend Developer Trainee dedicated to delivering exceptional web experiences. My projects – including a fruit online store and various mini applications – demonstrate my focus on usability, accessibility, and visual appeal.</p>
          <br />
          <ul className="grid-list">
            <li><FaHtml5 color="FF6500" /></li>
            <li><FaCss3Alt color='0D92F4' /></li>
            <li><IoLogoJavascript color='FCCD2A' /></li>
            <li><RiTailwindCssFill color='08C2FF' /></li>
            <li><FaBootstrap color='7C00FE' /></li>
            <li><FaReact color='08C2FF' /></li>
            <li><TbSeo color='FF8A8A' /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About