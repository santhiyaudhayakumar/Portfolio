import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 className='green-text'>Contact</h1>
      <div className="list">
        <ul>
          <li><FaLocationDot color="F95454"/><span>1920, EB Colony, Thanjavur - 613 006</span></li>
          <li><FaPhone color="789DBC"/><span>+91 7397567172</span></li>
          <li><BsWhatsapp color="73EC8B"/><span>+91 7397567172</span></li>
          <li><SiGmail color="F95454" /><span><a href="mailto:thiyakumar8699@gmail.com">thiyakumar8699@gmail.com</a></span></li>
        </ul>
      </div>
      <div className="footer">  
      </div>
      <p>The best way to learn is by doing - <span>Alan kay</span></p>
    </div>
  );
}

export default Contact